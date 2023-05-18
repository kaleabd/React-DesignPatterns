import React from "react";

interface UserInfoProps {
  person: {
    name: string;
    age: number;
    eyeColor: string;
    hobbies: string[];
  };
}

const UserInfo: React.FC<UserInfoProps> = ({ person }) => {
  const { name, age, eyeColor, hobbies } = person;
  return (
    <>
      <h2 className="font-bold">{name}</h2>
      <div className="flex gap-2">
        <p>{age} years,</p>
        <p>{eyeColor},</p>
        <p>Hobbies: </p>
        <ul className="flex gap-2">
            {hobbies.map((hobby) => (
            <li key={hobby} className="bg-indigo-300">{hobby},</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserInfo;
