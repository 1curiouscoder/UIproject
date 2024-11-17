import React from "react";

function Text(props) {
  let { innerText, id, className } = props.content;
  return (
    <p id={id} className={className}>
      {innerText}
    </p>
  );
}

export default Text;
