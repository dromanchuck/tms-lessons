import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { Context } from "../../App";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { FullPost } from "../../components/FullPost";
import { Header } from "../../components/Header";
import { IPost } from "../../types/post";
import { removePost } from "../../api/posts";

export const SelectedPost = () => {
  //параметры в роуте: route_path/:some_param
  const params = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

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

  const handleRemovePost = () => {
    if (post?.id) {
      removePost(post.id).then((response) => {
        if (response.ok) {
          NotificationManager.success("Удаление поста", "Пост успешно удален");
          navigate(-1);
        } else {
          NotificationManager.error("Удаление поста", "Пост не удален");
        }
      });
    }
  };

  return (
    <Container>
      <Header />
      {post ? <FullPost {...post} /> : null}
      {user?.id === post?.author ? (
        <Button
          type="primary"
          text={"Remove post"}
          onClick={handleRemovePost}
        />
      ) : null}
    </Container>
  );
};
