import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  let synonyms = props.meaning.synonyms;
  let examples = props.meaning.example;

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
        <br />
        <Examples examples={examples} />
        <br />
        <Synonyms synonyms={synonyms} />
      </p>
    </div>
  );
}
