import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <p>
        Example: <em>{props.examples}</em>
      </p>
    );
  } else {
    return null;
  }
}
