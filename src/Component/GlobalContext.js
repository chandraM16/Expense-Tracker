import React, { createContext, useState } from "react";

export const MainStateObject = createContext();
export const GlobalContext = (prop) => {
  const [state, setState] = useState({
    bal: 0,
    income: 0,
    expense: 0,
    logs: [],
  });
  console.log(state);

  return (
    <MainStateObject.Provider value={{ state, setState }}>
      {prop.children}
    </MainStateObject.Provider>
  );
};
