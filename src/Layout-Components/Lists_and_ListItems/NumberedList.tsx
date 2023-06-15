import React from 'react';

type ListProps = {
  name: string;
  price: string;
  description: string;
  rating: number;
};

type NumberedListProps = {
  items: ListProps[];
  resourceName: string;
  itemComponent: React.ComponentType;
};

const NumberedList: React.FC<NumberedListProps> = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <div className='grid grid-cols-3 m-10 gap-4'>
      {items.map((item, i) => (
        <div className='border '>
            <p>{i+1}</p>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </div>
        
      ))}
    </div>
  );
};

export default NumberedList;
