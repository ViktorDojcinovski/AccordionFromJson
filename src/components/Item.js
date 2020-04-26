import React from "react";
import { string, bool, func, oneOfType, array, element } from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const StyledListItem = styled.li`
  border: none;
  margin: 0;
  span {
    span {
      padding-right: 10px;
    }
  }
`;

function Item({
  _id,
  name,
  showChildren,
  items,
  children,
  hasChildrenItems,
  onClick,
}) {
  const onClickHandler = (e) => {
    e.preventDefault();
    onClick(e.currentTarget);
  };

  return (
    <StyledListItem>
      <span
        style={{
          cursor: items ? "pointer" : "not-allowed",
          fontWeight: items ? "bold" : "light",
        }}
        id={_id}
        onClick={items ? onClickHandler : null}
      >
        <span>{name}</span>
        <small>
          {hasChildrenItems ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ pointerEvents: "auto" }}
            />
          ) : null}
        </small>
      </span>
      {showChildren ? children : null}
    </StyledListItem>
  );
}

Item.propTypes = {
  _id: string,
  name: string,
  showChildren: bool,
  items: array,
  onClick: func,
  children: oneOfType([array, element]),
  hasChildrenItems: bool,
};

export default Item;
