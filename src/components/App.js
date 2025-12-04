
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
     <h1>{count}</h1>

      {/* 2nd child (Increment button) */}
      <button onClick={() => dispatch(increment())}>increment</button>

      {/* 3rd child (Decrement button) */}
      <button onClick={() => dispatch(decrement())}>decrement</button>
   
    </div>
  )
}

export default App
