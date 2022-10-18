import { ReactNode, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Context } from "../App";
import { User } from "../components/Users/User";
import { Users } from "../components/Users/Users";
import { Activation } from "../pages/Activation";
import { AddPost } from "../pages/AddPost";
import { ConfirmPassword } from "../pages/ConfirmPassword";
import { EditPost } from "../pages/EditPost";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { MyPosts } from "../pages/MyPosts";
import { Registration } from "../pages/Registration";
import { RegistrationConfirmation } from "../pages/RegistrationSuccess";
import { ResetPassword } from "../pages/ResetPassword";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/register-success" element={<RegistrationConfirmation />} />
      <Route path="/selected-post/:id" element={<SelectedPost />} />
      <Route path="/activate/:uid/:token" element={<Activation />} />
      <Route path="/add-post" element={useLoginGuard(<AddPost />)} />
      <Route path="/myposts" element={useLoginGuard(<MyPosts />)} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/password/reset/confirm/:uid/:token"
        element={<ConfirmPassword />}
      />
      <Route path="/edit-post/:id" element={<EditPost />} />
      <Route path="*" element={<h1>404</h1>} />
      {/* <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<User />} /> */}
    </Routes>
  );
};

const useLoginGuard = (component: ReactNode) => {
  const { user } = useContext(Context);

  if (user) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
};
