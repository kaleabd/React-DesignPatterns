import React from 'react'

type ListProps = {
    person: {
        name: string
        age: number
        eyeColor: string
        hobbies: string[]
    }

}

const LargePersonListItem: React.FC<ListProps> = ({person}) => {
  const {name, age, eyeColor, hobbies} = person

  return (
    <div>
      <p>
        Hello, {name}. You are {age} years old.
      </p>
      <p>and your eye color is {eyeColor}</p>
      <p>and you like</p>
      <ul>
        {
            hobbies.map(hobby => <li key={hobby}>{hobby}</li>)
        }
      </ul>
    </div>
  )
}

export default LargePersonListItem