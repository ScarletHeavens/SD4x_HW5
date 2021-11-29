import React from "react";
import ListItem from "./ListItem.js";
import AddItem from "./AddItem.js";

const List = ({ name, items, addItem }) => {
  if (items) {
    return (
      <div id={name}>
        <h3>{name} List</h3>
        <ul>
          {items.map(function (item) {
            return (
              <li>
                <ListItem item={item} />
              </li>
            );
          })}
        </ul>
        <AddItem idName={name} addItem={addItem} />
      </div>
    );
  }
  return (
    <div id={name}>
      <h3>{name} List</h3>
      <AddItem idName={name} addItem={addItem} />
    </div>
  );
};

export default List;
