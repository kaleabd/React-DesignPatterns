import React from "react";
type people = {
    name: string;
    age: number;
    eyeColor: string;
    hobbies: string[];
}

interface RegularListProps {
  items: people[]; // Update the type to be an array of objects
  resourceName: string;
  itemComponent: React.ComponentType | any
}

const RegularList: React.FC<RegularListProps> = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {/* Rendering a list of items using the `map` function. For each item in the `items` array, it
      creates a new instance of the `ItemComponent` and passes the `item` as a prop with the key of
      `resourceName`. The `key` prop is used to uniquely identify each item in the list. */}
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
