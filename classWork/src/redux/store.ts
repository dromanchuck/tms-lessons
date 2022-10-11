import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { counterReducer, ICounterState } from "./reducers/counter";
import { IPostsState, postsReducer } from "./reducers/posts";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

export type TState = {
  counterReducer: ICounterState;
  postsReducer: IPostsState;
};

export let store = createStore(
  combineReducers({ counterReducer, postsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
