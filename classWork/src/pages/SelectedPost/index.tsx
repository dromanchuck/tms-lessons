import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { IPost } from "../../types/post";

export const SelectedPost = () => {
  //параметры в роуте: route_path/:some_param
  const params = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/${params.id}`
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPost(values);
      });
  }, []);

  return (
    <Container>
      <Header />
      {post ? <FullPost {...post} /> : null}
    </Container>
  );
};
