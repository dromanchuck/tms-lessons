import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import { PostList } from "../PostsList";

export const MarkedPosts = () => {
  const markedPosts = useSelector(
    (state: TState) => state.postsReducer.markedPosts
  );

  return <PostList posts={markedPosts} />;
};
