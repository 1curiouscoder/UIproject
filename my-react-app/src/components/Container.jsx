import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Text from "./Text";

function Container(props) {
  let { id, className } = props.content;
  if (id == "h-desc") {
    return (
      <div className={className} id={id}>
        <header className="Header">
          <Heading
            content={{
              id: "t_title",
              className: "descriptionHeading",
              innerText: "Discover, Connect, and Create with Event Connect",
            }}
          />
          <Text
            content={{
              id: "t_subtitle",
              className: "descriptionText",
              innerText:
                "Join an exciting community of creators and collaborators!",
            }}
          />
        </header>

        <div className="btnGroup">
          <Button
            content={{
              id: "t_get_start",
              className: "descriptionButton",
              innerText: "Get Started Now",
            }}
          />
          <Button
            content={{
              id: "t_watch_video",
              className: "descriptionButton",
              innerText: "Watch Our Intro",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Container;
