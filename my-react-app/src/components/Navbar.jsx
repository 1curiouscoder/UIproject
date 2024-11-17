import React from "react";
import ListItem from "./ListItem";
import Image from "./Image";
import Button from "./Button";
import Heading from "./Heading";

function Navbar() {
  const links = [
    {
      PassedComponent: Image,
      elementType: "image",
      content: {
        src: "./images/1000019600-removebg-preview 3.png",
        alt: "logo",
        id: "logo",
        className: "",
      },
    },
    {
      PassedComponent: Heading,
      elementType: "heading",
      content: {
        id: "t_company_name",
        className: "",
        innerText: "TAKINA SPACE",
      },
    },
    "privacy policy",
    "events",
    "privacy policy",
  ];
  return (
    <nav>
      <ListItem links={links} />
      <div className="navbarButtonContainer">
        <Button
          content={{
            className: "navbarButton button-light",
            innerText: "Sign In",
            id: "",
          }}
        />
        <Button
          content={{
            className: "navbarButton button-blue",
            innerText: "Try for Free",
            id: "",
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
