import React from "react";

import "./Card.css";

// Component for the wrapping card
const Card = (props) => {
  // add any className defined when calling this component, to the class card
  const classes = "card " + props.className;

  // props.children == the content between the opening and closing tag
  return <div className={classes}>{props.children}</div>;
};

export default Card;
