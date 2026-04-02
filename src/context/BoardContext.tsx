import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = { tickets: [] };

export const BoardContext = createContext<any>(null);

export const BoardProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};
