import { Dispatch } from "redux";
import { fetchPosts } from "../../api/posts";
import { IPost } from "../../types/post";
import { ACTIONS } from "../constants";
import { TState } from "../store";

export const likePost = (post: IPost) => {
  return { type: ACTIONS.LIKE_POST, post };
};

export const setAllPosts = (posts: IPost[]) => {
  return {
    type: ACTIONS.SET_ALL_POSTS,
    posts,
  };
};

export const loadAppPosts = (searchText: string) => {
  return (dispatch: Dispatch, getState: () => TState) => {
    const { postsReducer } = getState();
    const posts = postsReducer.allPosts;

    fetchPosts(searchText, posts.length)
      .then((values) => {
        console.log(values.count > values.results.length);
        if (values.count > values.results.length) {
          dispatch(setShowLoadMore(true));
        } else {
          dispatch(setShowLoadMore(false));
        }

        if (posts.length !== 0) {
          dispatch(setAllPosts(posts.concat(values.results)));
        } else {
          dispatch(setAllPosts(values.results));
        }
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: ACTIONS.SET_IS_LOADING,
    isLoading,
  };
};

export const setShowLoadMore = (showLoadMore: boolean) => {
  return {
    type: ACTIONS.SET_SHOW_LOAD_MORE,
    showLoadMore,
  };
};

export const loadMorePosts = (searchText: string) => {
  return (dispatch: Dispatch, getState: () => TState) => {
    const allPosts = getState().postsReducer.allPosts;

    const promise = fetchPosts(searchText, allPosts.length);

    promise.then((values) => {
      console.log({ values });

      if (values.results.length + allPosts.length === values.count) {
        dispatch(setShowLoadMore(false));
      }

      dispatch(setAllPosts(allPosts.concat(values.results)));
    });
  };
};