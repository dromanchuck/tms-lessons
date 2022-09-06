import { createContext } from "react";
import "./App.css";
import { AllPosts } from "./components/AllPosts";
import { Header } from "./components/Header";
import { LiveConverter } from "./components/LiveConverter";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { TodoList } from "./components/TodoList/List";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

export const Context = createContext({});

function App() {
  return (
    <Context.Provider
      value={{
        value: 10,
      }}
    >
      {/* <Main /> */}
      <Login />
    </Context.Provider>
  );
}

export default App;
