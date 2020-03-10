import React, { useState } from "react";

export default function Choices(props) {
  // let [choicesList, setChoices] = useState([]);
  let choicesList = [];
  let choiceList = props.incorrectChoices.concat(props.correctChoice);
  // console.log(choiceList);
  // setChoices(choiceList);

  choicesList = choicesList.concat(choiceList);

  function checkResults(e) {
    console.log(e.target.textContent);
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
