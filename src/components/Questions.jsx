import React, { useState, useEffect } from "react";
import Choices from "./Choices";
import "./css/Questions.css";
import entities from "entities";

export default function Questions() {
  const lis = document.querySelectorAll("li");
  let li = [...lis];
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
    li.map(item => {
      item.style.backgroundColor = "white";
      item.style.color = "black";
      return null;
    });
    if (index < 9) {
      setCurrentQuestion(questionsList[index + 1]);
      setIndex(index + 1);
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
