interface SmallPersonProps {
    person: {
        name: string;
        age: number;
    }
}
const SmallPersonListItem: React.FC<SmallPersonProps> = ({person}) => {
    const {name, age} = person
  return (
    <p>Name :{name}, Age: {age}</p>
  )
}

export default SmallPersonListItem