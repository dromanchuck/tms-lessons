import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddPostForm } from "../../components/AddPostForm";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { IPost } from "../../types/post";

export const EditPost = () => {
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
      {post ? (
        <AddPostForm
          isEdit={true}
          defaultTitle={post?.title}
          defaultImage={post?.image}
          defaultNumber={post?.lesson_num}
          defaultText={post?.text}
          postId={post?.id}
        />
      ) : null}
    </Container>
  );
};
