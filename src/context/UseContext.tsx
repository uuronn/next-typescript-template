import { createContext, ReactNode } from "react";

export const UseContext = createContext({
  number: 0,
  title: ""
});

type ContextProviderProps = {
  children?: ReactNode;
};

export const UseContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <UseContext.Provider value={{ number: 10, title: "hoge" }}>
      {children}
    </UseContext.Provider>
  );
};
