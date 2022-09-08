import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RootRouter } from "./router";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}>({ isDark: false, setIsDark: () => {} });

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Context.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
        <RootRouter />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
