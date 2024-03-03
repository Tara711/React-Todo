import React from "react";
import Item from "./Item";

const FoodItem = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item} foodItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
