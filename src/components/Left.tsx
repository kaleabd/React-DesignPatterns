interface LeftProps {
    message: string
}
const Left: React.FC<LeftProps> = ({message}) => {
  return (
    <div>{message}</div>
  )
}

export default Left