import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { fetchMyPosts, removePost } from "../../api/posts";

import { IPost } from "../../types/post";
import { PostList } from "../PostsList";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMyPosts()
      .then((values) => {
        if (values?.status === 404) {
          setPosts([]);
        } else {
          setPosts(values);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const navigateToSelectedPost = (postId: number) => {
    navigate(`/selected-post/${postId}`);
  };

  const deletePost = (postId: number) => {
    setIsLoading(true);
    removePost(postId)
      .then((response) => {
        if (response.ok) {
          const newPosts = posts.filter((item) => {
            if (item.id === postId) {
              return false;
            }

            return true;
          });
          setPosts(newPosts);

          NotificationManager.success("Удаление поста", "Пост удален успешно!");
        } else {
          NotificationManager.error(
            "Удаление поста",
            "Пост не получилось удалить"
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <>
          <PostList
            posts={posts}
            onClickPost={navigateToSelectedPost}
            onClickDelete={deletePost}
          />
        </>
      )}
    </>
  );
};
