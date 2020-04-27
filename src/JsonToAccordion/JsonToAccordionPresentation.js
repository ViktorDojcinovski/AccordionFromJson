import React from "react";

import Button from "../components/Button";
import ItemList from "../components/ItemList";

function JsonToAccordion(props) {
  return (
    <>
      <ItemList {...props} />
      <Button onClick={props.onClickButton} bgcolor="#5cb85c">
        {props.allItems.length === props.toggledItems.length &&
        props.toggledItems.length !== 0
          ? "Collapse All"
          : "Expand All"}
      </Button>
    </>
  );
}

export default JsonToAccordion;
