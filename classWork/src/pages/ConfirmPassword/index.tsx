import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { confirmPassword } from "../../api/auth";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { NotificationManager } from "react-notifications";

export const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const navigate = useNavigate();

  const handleConfirmPassword = () => {
    if (uid && token && password) {
      confirmPassword(uid, token, password).then((response) => {
        if (response.ok) {
          navigate("/login");
        } else {
          NotificationManager.error("Что-то пошло не так");
        }
      });
    }
  };

  return (
    <Container>
      <Header />
      <Title text="Подтвердите пароль" />
      <Input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        type="primary"
        onClick={handleConfirmPassword}
        text={"Подтвердить пароль"}
      />
    </Container>
  );
};
