import React, { useState, useEffect } from "react";
import Choices from "./Choices";

export default function Questions() {
  const [results, setResults] = useState([]);
  const questionsList = [];
  let index = 0;
  const [currentQuestion, setCurrentQuestion] = useState();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        console.log(data.results);
      });
  }, []);

  function nextQuestion() {
    if (index < results.length) {
      index++;
      setCurrentQuestion(questionsList[index]);
    }
  }

  if (results.length > 0) {
    results.map(item => {
      questionsList.push(item.question);
      return questionsList;
    });

    // currentQuestion = questionsList[0];

    return (
      <div>
        <h2>{currentQuestion}</h2>
        <Choices
          incorrectChoices={results[0].incorrect_answers}
          correctChoice={results[0].correct_answer}
        />
        <button onClick={() => nextQuestion()}>Next</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading Data..</h1>
      </div>
    );
  }
}
