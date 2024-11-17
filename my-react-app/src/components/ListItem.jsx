import React from "react";

function ListItem(props) {
  const links = props.links;
  return (
    <ul>
      {links.map((item, index) => {
        if (typeof item == "object") {
          let { PassedComponent, elementType, content } = item;
          return (
            <li key={index}>
              {PassedComponent && <PassedComponent content={content} />}
            </li>
          );
        } else return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default ListItem;
