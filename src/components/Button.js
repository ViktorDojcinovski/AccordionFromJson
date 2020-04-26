import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { darken } from "polished";

const StyledButton = styled.button`
  border: none;
  background: none;
  color: white;
  background: ${(props) => props.bgcolor};
  padding: 10px;
  border-radius: 4px;
  margin: 0;
  &:hover {
    background: ${(props) => darken(0.2, props.bgcolor)};
  }
`;
function Button({ onClick, children, bgcolor }) {
  return (
    <StyledButton
      bgcolor={bgcolor}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: func.isRequired,
  bgcolor: string,
};

export default Button;
