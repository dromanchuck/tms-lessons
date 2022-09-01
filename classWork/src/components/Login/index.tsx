import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    alert(email + " " + password);
  };

  return (
    <div>
      <Input value={email} onChange={handleEmail} />
      <Input value={password} onChange={handlePassword} />
      <Button type="primary" onClick={submit} text={"Login"} />
    </div>
  );
};
