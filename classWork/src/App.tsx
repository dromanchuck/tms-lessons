import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getUser, refreshToken } from "./api/auth";
import "./App.css";
import { RootRouter } from "./router";
import { IUser } from "./types/auth";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
});

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  console.log("USER=", user);

  useEffect(() => {
    let isOk = true;

    getUser()
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }

        return response.json();
      })
      .then((json) => {
        if (isOk) {
          setUser(json);
        }
      });
  }, []);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
      >
        <RootRouter />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
