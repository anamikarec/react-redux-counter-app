import { ActionConstants } from "./actionConstant";
const initState = {
  count: 0
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionConstants.INCREMENT_COUNTER: {
      return { count: action.payload.count + 1 };
    }

    case ActionConstants.DECREMENT_COUNTER: {
      const decrementCount = {
        count: action.payload.count - 1
      };
      return decrementCount;
    }
    case ActionConstants.RESET_COUNTER: {
      const resetCount = {
        count: 0
      };
      return resetCount;
    }
    default: {
      return state;
    }
  }
};
export default reducer;
