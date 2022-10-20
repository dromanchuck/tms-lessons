import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { fetchMyPosts, removePost } from "../../api/posts";

import { IPost } from "../../types/post";
import { PostList } from "../PostsList";

export const MyPostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

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

  const handleDeletePost = useCallback(deletePost, [posts]);

  const onClickEdit = useCallback((postId: number) => {
    navigate(`/edit-post/${postId}`);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        +
      </button>
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <PostList
          posts={posts}
          onClickDelete={handleDeletePost}
          onClickEdit={onClickEdit}
        />
      )}
    </>
  );
};

// const withLogging = (Component: ReactNode) => {}
