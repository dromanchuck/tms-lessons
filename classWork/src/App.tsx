import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RootRouter } from "./router";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: any) => {},
});

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);

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
