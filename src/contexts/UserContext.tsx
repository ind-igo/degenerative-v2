import React, { createContext, useState, useEffect } from 'react';

const initialState = {
  positions: [],
  updateUserPositions: () => {},
};

export const UserContext = React.createContext(initialState);

export const UserContextProvider: React.FC = ({ children }) => {
  const [positions, setPositions] = useState([]);

  // TODO pull user positions for all synths
  const updateUserPositions = () => {};

  return (
    <UserContext.Provider
      value={{
        positions,
        updateUserPositions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
