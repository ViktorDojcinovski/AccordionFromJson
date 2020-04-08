import React from "react";
import { string, bool, func, oneOfType, array, element } from "prop-types";

function Item({ _id, name, showChildren, items, children, onClick }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    onClick(e.target);
  };

  return (
    <li>
      {/* eslint-disable-next-line */}
      <span
        style={{
          cursor: items ? "pointer" : "not-allowed",
          color: "darkblue",
          fontWeight: items ? "bold" : "light",
        }}
        id={_id}
        onClick={items ? onClickHandler : null}
      >
        {name}
      </span>
      {showChildren ? children : null}
    </li>
  );
}

Item.propTypes = {
  _id: string,
  name: string,
  showChildren: bool,
  items: array,
  onClick: func,
  children: oneOfType([array, element]),
};

export default Item;
