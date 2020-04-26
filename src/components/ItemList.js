import React from "react";
import { array, func } from "prop-types";
import styled from "styled-components";

import Item from "./Item";
import { lighten } from "polished";

const StyledList = styled.ul`
  background-color: #aaa;
  padding: 0;
  margin: 0;
  ul {
    padding: 0;
  }
`;

function ItemList({ data, onClickItem, toggledItems }) {
  // Color lightening coefficient
  let Co = 0.05;
  // Recursive list for list creation
  const list = (data) => {
    const children = (items, Co) => {
      if (items) {
        return (
          <ul style={{ backgroundColor: lighten(Co, "#aaa") }}>
            {list(items)}
          </ul>
        );
      }
    };

    return data.map((node) => {
      Co = node.items ? Co + 0.05 : 0.05;
      return (
        <Item
          key={node._id}
          {...node}
          hasChildrenItems={node.items && Array.isArray(node.items)}
          showChildren={toggledItems ? toggledItems.includes(node._id) : null}
          onClick={onClickItem}
        >
          {children(node.items, Co)}
        </Item>
      );
    });
  };
  return <StyledList>{list(data)}</StyledList>;
}

ItemList.propTypes = {
  data: array.isRequired,
  toggledItems: array,
  onClickItem: func.isRequired,
};

export default ItemList;
