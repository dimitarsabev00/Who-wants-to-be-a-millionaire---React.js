import React from "react";
import "./BoxQuestion.css";
const BoxQuestion = () => {
  return (
    <div className="BoxQuestion">
      <div className="question">What's the best country in Europe?</div>
      <div className="answers">
        <div className="answer">Turkey</div>
        <div className="answer">Germany</div>
        <div className="answer">Bulgaria</div>
        <div className="answer">France</div>
      </div>
    </div>
  );
};

export default BoxQuestion;
