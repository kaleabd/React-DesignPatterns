import React from "react";

interface UserInfoProps {
  user: {
    name: string;
    age: number;
    eyeColor: string;
    hobbies: string[];
  };
}

const UserInfo: React.FC<UserInfoProps | any> = ({ user }) => {
  const { name, age, eyeColor, hobbies } = user || {};
  return user ? (
    <>
      <h2 className="font-bold">{name}</h2>
      <div className="flex gap-2">
        <p>{age} years,</p>
        <p>{eyeColor},</p>
        <p>Hobbies: </p>
        <ul className="flex gap-2">
          {
          hobbies.map((hobby: string) => (
            <li key={hobby} className="bg-indigo-300">
              {hobby},
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <p>Loading....</p>
  );
};

export default UserInfo;
