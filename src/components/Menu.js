import React from "react";

// destructuring
const Menu = ({ title }) => {
  return (
    // style with CSS module
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Menu;