import { IPost } from "../../types/post";
import { PostItem } from "../PostItem";

export const FullPost = (props: IPost) => {
  return <PostItem {...props} isLarge={true} />;
};
