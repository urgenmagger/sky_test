import React, { useContext, createContext } from "react";
import useGetData from "../components/api/useGetData";

interface contextDataType {
  persons: [];
}

const defaultContextData: contextDataType = {
  persons: [],
};

const ContextApp = createContext({ defaultContextData });

export const useAppContext = () => {
  return useContext(ContextApp);
};

export const AppContext = ({ children }: { children: React.ReactNode }) => {
  const { persons } = useGetData();

  return (
    <ContextApp.Provider value={{ persons }}> {children}</ContextApp.Provider>
  );
};
