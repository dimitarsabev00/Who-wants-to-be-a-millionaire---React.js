import React, { useEffect, useState } from "react";
import "./BoxQuestion.css";
const BoxQuestion = ({
  data,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
  };
  return (
    <div className="BoxQuestion">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxQuestion;
