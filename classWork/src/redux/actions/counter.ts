import { ACTIONS } from "../constants";

export const increment = () => {
  return {
    type: ACTIONS.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ACTIONS.DECREMENT,
  };
};

export const setToNumber = (value: number) => {
  return {
    type: ACTIONS.SET_TO_NUMBER,
    value: value,
  };
};
