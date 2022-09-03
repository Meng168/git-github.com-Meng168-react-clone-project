import React from "react";

const Helmet = (props) => {
  document.title = "Meng app -" + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
