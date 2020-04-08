import React from "react";
import { func } from "prop-types";

function Button({ onClick, children }) {
  return (
    <button style={{ cursor: "pointer" }} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: func,
};

export default Button;
