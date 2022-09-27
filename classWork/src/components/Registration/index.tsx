import style from "./style.module.css";
import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validation";
import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value);
    if (error) {
      setUserError(error);
    } else {
      setUserError("");
    }

    setUser(event.target.value);
  };
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
    }

    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value);
    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError("");
    }

    setPassword(event.target.value);
  };
  const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateConfirmPassword(event.target.value, password);

    if (error) {
      setConfirmError(error);
    } else {
      setConfirmError("");
    }

    setConfirm(event.target.value);
  };

  const onClickLogin = () => {
    setError("");
    const errors = {
      user: validateRequired(user),
      email: validateEmail(email),
      password: validateRequired(password),
      confirm: validateConfirmPassword(password, confirm),
    };

    //::NEW
    setUserError(errors.user);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setConfirmError(errors.confirm);

    const isValidForm = Object.values(errors).every((error) => error === "");

    if (isValidForm) {
      //run registration request
      const promise = registerUser(user, email, password);
      let isOk = true;

      promise
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
            //on success
            navigate("/register-success");
          } else {
            //обработка ошибок

            if (json?.email?.includes("user with this Email already exists.")) {
              setError("Пользователь с таким email уже существует");
              return;
            }

            if (
              json?.username?.includes(
                "A user with that username already exists."
              )
            ) {
              setError("Пользователь с таким username уже существует");
              return;
            }

            //обработка пороля

            // "This password is too short. It must contain at least 8 characters."

            // "This password is too common."

            // "This password is entirely numeric."
          }
        });
    }
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);

    setEmailError(error);
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  return (
    <div className={style.form}>
      <Input
        value={user}
        placeholder="User Name"
        onChange={handleUser}
        //::NEW
        error={userError}
      />
      <Input
        value={email}
        placeholder="Email"
        onChange={handleEmail}
        onBlur={handleEmailBlur}
        onFocus={handleEmailFocus}
        //::NEW
        error={emailError}
      />
      <Input
        value={password}
        placeholder="Password"
        onChange={handlePassword}
        //::NEW
        error={passwordError}
      />
      <Input
        value={confirm}
        placeholder="Confirm Password"
        onChange={handleConfirm}
        //::NEW
        error={confirmError}
      />
      <p style={{ color: "red" }}>{error}</p>
      <div className={style.formBtn}>
        <Button text="Register" onClick={onClickLogin} type={"primary"} />
      </div>
    </div>
  );
};
