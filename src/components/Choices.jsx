import React, { useState } from "react";

export default function Choices(props) {
  // let [choicesList, setChoices] = useState([]);
  let choicesList = [];
  let choiceList = props.incorrectChoices.concat(props.correctChoice);
  // console.log(choiceList);
  // setChoices(choiceList);

  choicesList = choicesList.concat(choiceList);

  return (
    <div>
      {choicesList.map(item => (
        <li key={choicesList.indexOf(item)}>{item}</li>
      ))}
    </div>
  );
}
