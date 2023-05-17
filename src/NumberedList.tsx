import React from "react";
type people = {
    name: string;
    age: number;
    eyeColor: string;
    hobbies: string[];
}
interface product {
  name: string;
  price: string;
  description: string;
  rating: number;
};

interface NumberedListProps {
  items: people[] | product[]; // Update the type to be an array of objects
  resourceName: string;
  itemComponent: React.ComponentType | any
}

const NumberedList: React.FC<NumberedListProps> = ({
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
        <div className="">
            <h2 className="font-bold">{i+1})</h2>
            <ItemComponent key={i} {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
};

export default NumberedList;
