import style from "./style.module.css";
import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  validateConfirmPassword,
  validateEmail,
  validateRequired,
} from "../../utils/validation";

export const RegisterForm = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
    //::NEW
    const error = validateRequired(event.target.value);
    if (error) {
      setUserError(error);
    } else {
      setUserError("");
    }

    setUser(event.target.value);
  };
  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfirm(event.target.value);
  };
  const onClickLogin = () => {
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
    }
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
      <div className={style.formBtn}>
        <Button text="Login" onClick={onClickLogin} type={"primary"} />
      </div>
    </div>
  );
};
