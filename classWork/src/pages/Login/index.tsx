import { useContext } from "react";
import { Context } from "../../App";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";

export const Login = () => {
  const values = useContext(Context);
  console.log({ values });
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
};
