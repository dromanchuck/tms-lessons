import { AnyAction } from "redux";
import { IPost } from "../../types/post";
import { ACTIONS } from "../constants";

export interface IPostsState {
  likedPosts: IPost[];
  markedPosts: IPost[];
  allPosts: IPost[];
  isLoading: boolean;
  showLoadMore: boolean;
}

export const defaultState: IPostsState = {
  likedPosts: [],
  markedPosts: [],
  allPosts: [],
  isLoading: true,
  showLoadMore: false,
};

export const postsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.LIKE_POST: {
      const post = action.post;

      const newLikedPosts = post.liked // post.liked === true
        ? state.likedPosts.filter((item) => {
            if (item.id === post.id) {
              return false;
            } else {
              return true;
            }
          })
        : state.likedPosts.concat([{ ...post, liked: true }]); //[...state.likedPosts, post]

      const newAllPosts = state.allPosts.map((post) => {
        if (post.id === action.post.id) {
          post.liked = !post.liked;
        }

        return post;
      });

      return {
        ...state,
        likedPosts: newLikedPosts,
        allPosts: newAllPosts,
      };
    }

    case ACTIONS.SET_ALL_POSTS: {
      const newAllPosts = action.posts.map((post: IPost) => {
        const likedPost = state.likedPosts.find((item) => {
          if (item.id === post.id) {
            return item;
          }

          return null;
        });

        if (likedPost) {
          post.liked = true;
        }

        return post;
      });

      return {
        ...state,
        allPosts: newAllPosts,
      };
    }

    case ACTIONS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case ACTIONS.SET_SHOW_LOAD_MORE:
      return {
        ...state,
        showLoadMore: action.showLoadMore,
      };

    default:
      return state;
  }
};
