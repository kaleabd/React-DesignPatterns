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
    <div className='grid grid-cols-3 m-10 gap-4'>
      {items.map((item, i) => (
        <div className='border '>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </div>
        
      ))}
    </div>
  );
};

export default RegularList;
