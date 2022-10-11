import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAppPosts, loadMorePosts } from "../../redux/actions/posts";
import { TState } from "../../redux/store";

import { Button } from "../Button";
import { Input } from "../Input";
import { PostList } from "../PostsList";
import style from "./AllPosts.module.css";

export const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: TState) => state.postsReducer.allPosts);
  const isLoading = useSelector(
    (state: TState) => state.postsReducer.isLoading
  );
  const showLoadMore = useSelector(
    (state: TState) => state.postsReducer.showLoadMore
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(loadAppPosts(searchText) as any);
  }, [searchText]);

  const loadMore = () => {
    dispatch(loadMorePosts(searchText) as any);
  };

  const hangleSearchText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Input value={searchText} onChange={hangleSearchText} />
      {isLoading ? (
        <div style={{ width: 100, height: 100, background: "#000" }} />
      ) : (
        <>
          <PostList posts={posts} />
          {showLoadMore ? (
            <Button
              text="Загрузить еще"
              onClick={loadMore}
              type="primary"
              className={style.button}
            />
          ) : null}
        </>
      )}
    </>
  );
};
