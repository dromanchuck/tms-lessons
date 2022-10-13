import { ACTIONS } from "../constants";
import { defaultState, postsReducer } from "./posts";

describe("Posts reducer", () => {
  test("ACTIONS.SET_SHOW_LOAD_MORE with showLoadMore: true", () => {
    expect(
      postsReducer(defaultState, {
        type: ACTIONS.SET_SHOW_LOAD_MORE,
        showLoadMore: true,
      })
    ).toEqual({ ...defaultState, showLoadMore: true });
  });

  test("ACTIONS.SET_SHOW_LOAD_MORE with no showLoader", () => {
    expect(
      postsReducer(defaultState, {
        type: ACTIONS.SET_SHOW_LOAD_MORE,
      })
    ).toEqual({ ...defaultState, showLoadMore: undefined });
  });
});

export {};
