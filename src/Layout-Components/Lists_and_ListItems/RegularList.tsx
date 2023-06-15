import React from 'react';

type ListProps = {
  name: string;
  age: number;
  eyeColor: string;
  hobbies: string[];
};

type RegularListProps = {
  items: ListProps[];
  resourceName: string;
  itemComponent: React.ComponentType;
};

const RegularList: React.FC<RegularListProps> = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RegularList;
