import React, { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';

import './JsonToAccordion.component.css';

const JsonToAccordion = props => {
  const newData = cloneDeep(props.data);

  const [allItems, setAllItems] = useState([]);
  const [toggledItems, setToggledItems] = useState([]);

  useEffect(() => {
    setAllItems(recursion(props.data));
  }, []);

  // Recursive function for
  const recursion = data => {
    data.forEach(item => {
      if (item.hasOwnProperty('items')) {
        allItems.push(item._id);
        recursion(item.items);
      }
    });

    return allItems;
  };

  // Accordion element click callback
  const onClick = target => {
    if (toggledItems.includes(target.attributes.id.value)) {
      const filteredItems = toggledItems.filter(item => {
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

  // Recursive list for list creation
  const list = data => {
    const children = items => {
      if (items) {
        return <ul> {list(items)} </ul>;
      }
    };

    return data.map(node => {
      return (
        <Item
          key={node._id}
          id={node._id}
          name={node.name}
          showChildren={
            !toggledItems.includes(node._id)
              ? node.showChildren
              : !node.showChildren
          }
          onClick={onClick}
        >
          {children(node.items)}
        </Item>
      );
    });
  };

  return (
    <>
      <ul> {list(newData)} </ul>
      <button onClick={onClickButton}>
        {allItems.length === toggledItems.length && toggledItems.length !== 0
          ? 'Collapse All'
          : 'Expand All'}
      </button>
    </>
  );
};

const Item = props => {
  const onClick = e => {
    e.preventDefault();
    props.onClick(e.target);
  };

  return (
    <li>
      <a href='example.com' id={props.id} onClick={onClick}>
        {props.name}
      </a>
      {props.showChildren ? props.children : null}
    </li>
  );
};

export default JsonToAccordion;
