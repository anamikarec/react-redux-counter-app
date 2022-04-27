import { ActionConstants } from "./actionConstant";
export const incrementCount = ({ count }) => {
  return {
    type: ActionConstants.INCREMENT_COUNTER,
    payload: {
      count
    }
  };
};
export const decrementCounter = ({ count }) => {
  return {
    type: ActionConstants.DECREMENT_COUNTER,
    payload: {
      count
    }
  };
};

export const resetCounter = ({ count }) => {
  return {
    type: ActionConstants.RESET_COUNTER,
    payload: {
      count
    }
  };
};
