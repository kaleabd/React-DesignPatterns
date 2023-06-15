import React from 'react'

type LargeProductProps = {
    product : {
        name: string
        price: string
        description: string
        rating: number
    }

}

const LargeProductListItem: React.FC<LargeProductProps> = ({product}) => {
    const {name, price, description, rating} = product
  return (
    <div>
        {name} - {price}
        <p>{description}</p>
        <p>{rating}</p>
    </div>
  )
}

export default LargeProductListItem