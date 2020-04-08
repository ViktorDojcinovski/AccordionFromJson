import React, { useState, useEffect, useCallback } from "react";

import JsonToAccordion from "./JsonToAccordion";
import "./JsonToAccordionContainer.css";
import data from "../data.json";

const JsonToAccordionContainer = () => {
  const [allItems, setAllItems] = useState([]);
  const [toggledItems, setToggledItems] = useState([]);

  // Recursive function for
  const recursion = useCallback(
    (data) => {
      data.forEach((item) => {
        if (item.hasOwnProperty("items")) {
          allItems.push(item._id);
          recursion(item.items);
        }
      });

      return allItems;
    },
    [allItems]
  );

  useEffect(() => {
    console.log("useeffect");
    setAllItems(recursion(data));
  }, [recursion]);

  // Accordion item click callback
  const onClickElement = (target) => {
    if (toggledItems.includes(target.attributes.id.value)) {
      const filteredItems = toggledItems.filter((item) => {
        return item !== target.attributes.id.value;
      });
      setToggledItems(filteredItems);
    } else {
      setToggledItems(toggledItems.concat(target.attributes.id.value));
    }
  };

  // Button click callback
  const onClickButton = () => {
    if (allItems.length > toggledItems.length) {
      setToggledItems(allItems);
    } else {
      setToggledItems([]);
    }
  };

  return (
    <JsonToAccordion
      data={data}
      allItems={allItems}
      toggledItems={toggledItems}
      onClickButton={onClickButton}
      onClickItem={onClickElement}
    />
  );
};

export default JsonToAccordionContainer;
