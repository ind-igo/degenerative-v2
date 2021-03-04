import React, { createContext, useState, useEffect } from "react";

const initialState = {
  setDarkMode: (toDark_: boolean) => {},
  darkMode: false,
}

export const GlobalContext = React.createContext(initialState);

export const GlobalContextProvider: React.FC = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  // TODO add logic to change color scheme

  return (
    <GlobalContext.Provider
      value={{
        setDarkMode: (toDark_: boolean) => {
          localStorage.setItem('dark_mode', String(toDark_));
          setDarkMode(toDark_);
        },
        darkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
