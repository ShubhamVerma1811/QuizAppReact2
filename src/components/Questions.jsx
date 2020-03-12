import React, { useState, useEffect } from "react";
import Choices from "./Choices";
import "./css/Questions.css";
import entities from "entities";

export default function Questions() {
  const [results, setResults] = useState([]);
  const questionsList = [];
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        console.log(data.results);
      });
  }, []);

  function nextQuestion() {
    const h2 = document.querySelector("h2");
    if (index < 9) {
      setCurrentQuestion(questionsList[index + 1]);
      setIndex(index + 1);
      h2.innerText = "";
    } else alert("That's it.Refresh to play again");
  }

  if (results.length > 0) {
    results.map(item => {
      questionsList.push(item.question);
      return questionsList;
    });
  }
  useEffect(() => setCurrentQuestion(questionsList[index]), [
    questionsList,
    index
  ]);

  if (results.length > 0) {
    return (
      <div>
        <h1>
          Question {index + 1} /10:
          {currentQuestion}
        </h1>
        <Choices
          incorrectChoices={results[index].incorrect_answers}
          correctChoice={results[index].correct_answer}
        />
        <button onClick={() => nextQuestion()}>Next</button>
        <h2></h2>
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
