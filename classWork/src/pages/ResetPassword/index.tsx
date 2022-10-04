import { ChangeEventHandler, useState } from "react";
import { resetPassword } from "../../api/auth";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { NotificationManager } from "react-notifications";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const sendEmail = () => {
    resetPassword(email).then((response) => {
      if (response.ok) {
        NotificationManager.info(
          "Сообщение о смене пороля отправлено вам на почту"
        );

        setEmail("");
      }
    });
  };

  return (
    <Container>
      <Header />
      <Title text="Reset password" />
      <Input value={email} onChange={handleEmail} />
      <Button text="Send email" onClick={sendEmail} type="primary" />
    </Container>
  );
};
