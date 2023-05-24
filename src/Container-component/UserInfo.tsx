/* This is a TypeScript React component that displays information about a user. It takes in a `user`
object as a prop, which includes the user's name, age, eye color, and hobbies. The component then
renders this information in a formatted way using JSX. If the `user` prop is not provided, the
component displays a "Loading..." message. */

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
