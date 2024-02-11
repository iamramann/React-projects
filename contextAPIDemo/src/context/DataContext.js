import { useContext } from "react";
import { createContext } from "react";

export const dataContext = createContext({});

export const DataContextProvider = dataContext.Provider;

export default function useDataContextProvider() {
  return useContext(dataContext);
}
