import React from "react";

function Heading(props) {
  let { id, className, innerText } = props.content;

  return (
    <h1 className={className} id={id}>
      {innerText}
    </h1>
  );
}

export default Heading;
