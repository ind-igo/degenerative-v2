import React, { createContext, useState, useEffect } from 'react';

const initialState = {
  positions: [],
};

export const UserContext = React.createContext(initialState);

export const UserContextProvider: React.FC = ({ children }) => {
  const [positions, setPositions] = useState([]);

  // TODO pull user positions for all synths
  const updateUserPositions = (positions_: Array<object>) => {};

  return (
    <UserContext.Provider
      value={{
        positions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
