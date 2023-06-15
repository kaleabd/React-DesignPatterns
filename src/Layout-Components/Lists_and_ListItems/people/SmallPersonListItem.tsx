import React from 'react'

export type smallListProps = {
  person : {
    name: string
    age: number
  }

}

const SmallPersonListItem: React.FC<smallListProps> = ({person}) => {
  const {name, age} = person

  return (
    <div>
      <p>
        Hello, {name}. You are {age} years old.
      </p>
    </div>
  )
}

export default SmallPersonListItem