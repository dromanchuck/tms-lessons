import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};
