import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { getUser } from "./api/auth";
import "./App.css";
import { RootRouter } from "./router";
import { IUser } from "./types/auth";
import preloader from "./preloader.gif";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

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

const access = localStorage.getItem("access");

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);
  console.log("USER=", user);

  useEffect(() => {
    let isOk = true;

    if (access) {
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
        })
        .finally(() => {
          setIsReady(true);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
      >
        {isReady ? (
          <RootRouter />
        ) : (
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              width: "100px",
              height: "100px",
            }}
            src={preloader}
          />
        )}
      </Context.Provider>
      <NotificationContainer />
    </BrowserRouter>
  );
}

export default App;
