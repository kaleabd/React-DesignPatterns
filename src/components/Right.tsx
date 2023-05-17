interface RightProps {
    name: string
}
const Right: React.FC<RightProps> = ({name}) => {
  return (
    <div>{name}!</div>
  )
}

export default Right