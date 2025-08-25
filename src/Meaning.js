import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";


export default function Meaning(props) {
  let synonyms = props.meaning.synonyms;
  let examples = props.meaning.example;

  return (
    <div className="Meaning">
      <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
      <div>
        <p className="definition">{props.meaning.definition}</p>
        <Examples examples={examples} />
        <Synonyms synonyms={synonyms} />
      </div>
    </div>
  );
}
