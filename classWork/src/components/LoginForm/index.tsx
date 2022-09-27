import { FormEventHandler, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../api/auth";
import { Context } from "../../App";
import { Button } from "../Button";
import { Input } from "../Input";

export const LoginForm = () => {
  const refEmail: any = useRef(null);
  const refPassword: any = useRef(null);

  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    //option
    // console.log(refEmail?.current?.value, refEmail?.current?.value);
    // email = refEmail?.current?.value
    // password = refPassord?.current?.value
    const formData = new FormData(event?.target as any);
    const obj = Object.fromEntries(Array.from(formData.entries()));
    const email: string = obj.email as string;
    const password: string = obj.password as string;

    let isOk = true;
    login(email, password)
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
          localStorage.setItem("access", json.access);
          localStorage.setItem("refresh", json.refresh);

          getUser()
            .then((response) => {
              return response.json();
            })
            .then((user) => {
              setUser(user);
              navigate("/");
            });
        } else {
          //обрабатываем ошибки
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="email" required={true} refObj={refEmail} />
      <Input
        name="password"
        required={true}
        refObj={refPassword}
        minLength={3}
        maxLength={40}
      />
      <Button
        type="primary"
        onClick={() => {}}
        text={"Login"}
        btnType="submit"
      />
    </form>
  );
};
