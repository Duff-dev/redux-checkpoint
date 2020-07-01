import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import { useDispatch } from "react-redux";

const Counter = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>Counter : {props.count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

export default connect(mapStateToProps)(Counter);
