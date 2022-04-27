import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCount,
  resetCounter
} from "../redux/action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    const action = incrementCount({ count });
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrementCounter({ count });
    dispatch(action);
  };
  const resetCount = () => {
    const action = resetCounter({ count });
    dispatch(action);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
};

export default Counter;
