import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegistrationConfirmation = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header />
      <InfoTemplate
        title="Registration confirmation"
        textBtn="Home"
        onClick={navigateToHome}
      >
        Please blab bla <a href="#">test@gmail.com</a>
      </InfoTemplate>
      <Button type="primary" text="go back" onClick={goBack} />
    </Container>
  );
};
