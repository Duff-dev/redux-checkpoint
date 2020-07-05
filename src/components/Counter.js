import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div className="counter">
      <button onClick={() => props.increment()}>+</button>
      <h1>Counter : {props.count}</h1>
      <button onClick={() => props.decrement()}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
