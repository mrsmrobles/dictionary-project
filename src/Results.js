import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        <h3>/{props.results.phonetic}/</h3></section>
        {props.results.meanings.map(function (meaning, index) {
          if (index < 4) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
