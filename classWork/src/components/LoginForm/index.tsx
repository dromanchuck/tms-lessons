import { FormEventHandler, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../api/auth";
import { Context } from "../../App";
import { Button } from "../Button";
import { Input } from "../Input";

export const LoginForm = () => {
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

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
              console.log(user);
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
      <Input
        name="email"
        required={true}
        refObj={refEmail}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <Input
        name="password"
        required={true}
        refObj={refPassword}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
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
