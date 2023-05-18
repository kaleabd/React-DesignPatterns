import React, { useState, useEffect, ReactElement, ReactNode, isValidElement, cloneElement } from 'react';
import axios from 'axios';

interface CurrentProps {
  children: ReactNode;
}

interface UserProps {
  name: string;
  age: string;
  hairColor: string;
  hobbies: string[];
}

const CurrentUserLoader: React.FC<CurrentProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/current-user');
      const currentUser: UserProps = response.data;
      setUser(currentUser);
    })();
  }, []);

  return (
    <>
      {/* This code is mapping over the `children` prop passed to the `CurrentUserLoader` component and
      checking if each child is a valid React element using the `isValidElement` function. If it is a
      valid element, it is cloned using the `cloneElement` function and passed a new prop `user` with the
      value of the `user` state variable. If it is not a valid element, it is returned as is. The
      resulting array of mapped children is then rendered as the children of the `CurrentUserLoader`
      component. This allows the `user` state variable to be passed down to child components as a prop. */}
      {React.Children.map(children, (child: ReactNode) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<any>, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
