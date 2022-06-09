import React, { useContext, createContext } from "react";
import useGetData from "../components/api/useGetData";

const defaultContextData = {
  persons: [],
};

const ContextApp = createContext({ defaultContextData });

export const useAppContext = () => {
  return useContext(ContextApp);
};

export const AppContext = ({ children }) => {
  const { persons } = useGetData();

  return (
    <ContextApp.Provider value={{ persons }}> {children}</ContextApp.Provider>
  );
};
