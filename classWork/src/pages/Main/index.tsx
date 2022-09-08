import { AllPosts } from "../../components/AllPosts";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export const Main = () => {
  return (
    <Container>
      <Header />
      <AllPosts />
    </Container>
  );
};
