import React from "react";
import "./result.css";

const Result = (props) => {
  if (props.win) {
    return <div class="win">Congratulations! You win!</div>;
  } else if (props.count > 5) {
  return <div class="lose">You lose! The correct word was <span class="correct">{props.word}</span>!</div>;
  } else {
    return <div></div>;
  }
};

export default Result;
