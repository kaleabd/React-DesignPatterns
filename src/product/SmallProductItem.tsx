interface SmallProductProps {
    product: {
        name: string;
        price: string;
    }
}
const SmallProductListItem: React.FC<SmallProductProps> = ({product}) => {
    const {name, price} = product
  return (
    <p>Name :{name} - {price}</p>
  )
}

export default SmallProductListItem