import React from "react";

interface ProductInfoProps {
  product: {
    name: string;
    price: string;
    description: string;
    rating: number;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <div className="flex gap-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <p>{price}</p>
      </div>
      <div>
        <p>{description}</p>
        <p>{rating}</p>
      </div>
    </>
  );
};

export default ProductInfo;
