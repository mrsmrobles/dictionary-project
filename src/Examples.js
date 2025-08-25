import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <p>
        <em>Example: {props.examples}</em>
      </p>
    );
  } else {
    return null;
  }
}
