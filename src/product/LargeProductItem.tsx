import React from "react";

interface LargeProductProps {
  product: {
    name: string;
    price: string;
    description: string;
    rating: number;
  };
}

const LargeProductListItem: React.FC<LargeProductProps> = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      
      
    </>
  );
};

export default LargeProductListItem;
