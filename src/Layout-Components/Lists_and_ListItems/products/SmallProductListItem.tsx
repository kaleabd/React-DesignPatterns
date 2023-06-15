import React from 'react'

type SmallProductProps = {
    product: {
        name: string
        price: string
    }

}

const SmallProductListItem: React.FC<SmallProductProps> = ({product}) => {
  const {name, price} = product

  return (
    <div>
        {name} - {price}
    </div>
  )
}

export default SmallProductListItem