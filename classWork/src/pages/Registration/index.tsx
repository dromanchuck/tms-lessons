import { NavLink } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import styles from "./style.module.css";

export const Registration = () => {
  return (
    <Container>
      <Header />
      <NavLink
        to={"/registration"}
        className={({ isActive }) => (isActive ? styles.active_link : "")}
      >
        Registration
      </NavLink>
      |
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active_link : "")}
      >
        Login
      </NavLink>
      <LoginForm />
    </Container>
  );
};
