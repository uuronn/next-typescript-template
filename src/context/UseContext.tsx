import { createContext, ReactNode, useState } from "react";

export const UseContext = createContext(0);

type ContextProviderProps = {
  children?: ReactNode;
};

interface Value {
  count: number;
  setCount: any;
}

export const UseContextProvider = ({ children }: ContextProviderProps) => {
  const [count, setCount] = useState(10);
  const value: Value = {
    count,
    setCount
  };
  return <UseContext.Provider value={value}>{children}</UseContext.Provider>;
};
