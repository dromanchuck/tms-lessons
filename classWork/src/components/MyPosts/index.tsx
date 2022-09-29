import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMyPosts } from "../../api/posts";

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
    navigate(`/selected-user/${postId}`);
  };

  return (
    <>
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <>
          <PostList posts={posts} onClickPost={navigateToSelectedPost} />
        </>
      )}
    </>
  );
};
