import React from "react";
import "./css/Choices.css";

export default function Choices(props) {
  const h2 = document.querySelector("h2");
  let choicesList = [];
  let choiceList = props.incorrectChoices.concat(props.correctChoice);

  shuffle(choiceList);

  choicesList = choicesList.concat(choiceList);

  function checkResults(e) {
    if (e.target.textContent === props.correctChoice) {
      h2.innerText = "RIGHT";
      h2.style.color = "rgb(78, 183, 91)";
    } else {
      h2.innerText = "WRONG";
      h2.style.color = "rgb(255,0,0)";
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
