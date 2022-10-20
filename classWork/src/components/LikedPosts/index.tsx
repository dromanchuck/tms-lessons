import { useSelector } from "react-redux";
import { TState } from "../../redux/store";
import { PostList } from "../PostsList";

export const LikedPosts = () => {
  const posts = useSelector((state: TState) => state.postsReducer.likedPosts);

  return <PostList posts={posts} />;
};
