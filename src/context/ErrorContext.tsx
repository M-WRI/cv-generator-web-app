import React, { createContext, useContext, useState, ReactNode } from "react";

interface ErrorContextProps {
  errorState: any;
  setError: (location: string, error: any) => void;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [errorState, setErrorState] = useState<any>({});

  const setError = (location: string, error: any) => {
    setErrorState((prev: any) => ({
      ...prev,
      [location]: error,
    }));
  };

  return (
    <ErrorContext.Provider value={{ errorState, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
