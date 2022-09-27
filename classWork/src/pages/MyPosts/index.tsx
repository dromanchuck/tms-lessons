import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { MyPostsList } from "../../components/MyPosts";

export const MyPosts = () => {
  return (
    <Container>
      <Header />
      <MyPostsList />
    </Container>
  );
};
