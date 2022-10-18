import { AddPostForm } from "../../components/AddPostForm";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export const AddPost = () => {
  return (
    <Container>
      <Header />
      <AddPostForm isEdit={false} />
    </Container>
  );
};
