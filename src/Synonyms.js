import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">Synonyms:{" "} 
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <em>{synonym}
              {", "}</em>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
