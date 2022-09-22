import { Route, Routes } from "react-router-dom";
import { User } from "../components/Users/User";
import { Users } from "../components/Users/Users";
import { Activation } from "../pages/Activation";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";
import { RegistrationConfirmation } from "../pages/RegistrationSuccess";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/register-success" element={<RegistrationConfirmation />} />
      <Route path="/selected-user/:id" element={<SelectedPost />} />
      <Route path="/activate/:uid/:token" element={<Activation />} />
      {/* <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<User />} /> */}
    </Routes>
  );
};
