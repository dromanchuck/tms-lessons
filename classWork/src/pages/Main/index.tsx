import { useDispatch, useSelector } from "react-redux";
import { AllPosts } from "../../components/AllPosts";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export const Main = () => {
  const value = useSelector((state: { value: number }) => state.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };

  return (
    <Container>
      <Header />
      <p>{value}</p>
      <Button text="+" onClick={increment} type="primary" />
      <AllPosts />
    </Container>
  );
};
