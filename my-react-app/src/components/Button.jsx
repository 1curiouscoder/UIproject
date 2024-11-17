import React from "react";

function Button(props) {
  let { className, id, innerText } = props.content;
  return (
    <button className={className} id={id}>
      {innerText}
    </button>
  );
}

export default Button;
