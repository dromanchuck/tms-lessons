import { AnyAction } from "redux";
import { ACTIONS } from "../constants";

export interface ICounterState {
  value: number;
}

const defaultState: ICounterState = {
  value: 0,
};

export const counterReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { value: state.value + 1 };
    case ACTIONS.DECREMENT:
      return { value: state.value - 1 };
    case ACTIONS.SET_TO_NUMBER:
      return { value: action.value };
    default:
      return state;
  }
};
