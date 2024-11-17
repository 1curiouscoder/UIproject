import React from "react";

function Image(props) {
  let { src, alt, id, className, size } = props.content;
  return <img className={className} src={src} alt={alt} id={id} />;
}

export default Image;
