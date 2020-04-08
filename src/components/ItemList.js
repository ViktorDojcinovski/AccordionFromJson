import React from "react";
import { array, func } from "prop-types";

import Item from "./Item";

function ItemList({ data, onClickItem, toggledItems }) {
  // Recursive list for list creation
  const list = (data) => {
    const children = (items) => {
      if (items) {
        return <ul> {list(items)} </ul>;
      }
    };

    return data.map((node) => {
      return (
        <Item
          key={node._id}
          {...node}
          showChildren={toggledItems.includes(node._id)}
          onClick={onClickItem}
        >
          {children(node.items)}
        </Item>
      );
    });
  };
  return <ul>{list(data)}</ul>;
}

ItemList.propTypes = {
  toggledItems: array,
  data: array,
  onClickItem: func,
};

export default ItemList;
