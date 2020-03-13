import React from "react";
import "./css/Choices.css";

export default function Choices(props) {
  let click = 0;
  const h2 = document.querySelector("h2");
  let choicesList = [];
  let choiceList = props.incorrectChoices.concat(props.correctChoice);

  shuffle(choiceList);

  choicesList = choicesList.concat(choiceList);

  function checkResults(e) {
    if (click !== 1) {
      if (e.target.textContent === props.correctChoice) {
        e.target.style.color = "white";
        e.target.style.backgroundColor = "green";
      } else {
        e.target.style.color = "white";
        e.target.style.backgroundColor = "red";
      }
      click = 1;
    }
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return (
    <div>
      {choicesList.map(item => (
        <li onClick={checkResults} key={choicesList.indexOf(item)}>
          {item}
        </li>
      ))}
    </div>
  );
}
