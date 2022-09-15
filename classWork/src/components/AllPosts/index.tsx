import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IPost } from "../../types/post";
import { Button } from "../Button";
import { PostList } from "../PostsList";
import style from "./AllPosts.module.css";

export const AllPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch(
      "https://studapi.teachmeskills.by/blog/posts/?limit=10"
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });
        setPosts(values.results);
      });
  }, []);

  // useEffect(() => {
  //   fetch
  // }, [searchText]);

  const loadMore = () => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=100&offset=${posts.length}`
    );

    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        console.log({ values });

        if (values.results.length + posts.length === values.count) {
          setShowLoadMore(false);
        }

        setPosts(posts.concat(values.results));
      });
  };

  const navigateToSelectedPost = (postId: number) => {
    navigate(`/selected-user/${postId}`);
  };

  return (
    <>
      <PostList posts={posts} onClickPost={navigateToSelectedPost} />
      {showLoadMore ? (
        <Button
          text="Загрузить еще"
          onClick={loadMore}
          type="primary"
          className={style.button}
        />
      ) : null}
    </>
  );
};
