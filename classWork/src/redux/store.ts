import { AnyAction, legacy_createStore as createStore } from "redux";

export function counterReducer(state = { value: 10 }, action: AnyAction) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(counterReducer);
