import { IPost } from "../../types/post";
import { ACTIONS } from "../constants";

export const likePost = (post: IPost) => {
  return { type: ACTIONS.LIKE_POST, post };
};
