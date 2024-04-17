"use client";

import { createContext, useContext, useState } from "react";

type KeyContextValue = {
  key: number;
  incrementKey: () => void;
};

const KeyContext = createContext<KeyContextValue | undefined>(undefined);

export function useKeyContext() {
  const context = useContext(KeyContext);
  if (!context) {
    throw new Error("useKeyContext must be used within a KeyProvider");
  }
  return context;
}

export function KeyProvider({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState(0);

  const incrementKey = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const contextValue: KeyContextValue = {
    key,
    incrementKey,
  };

  return (
    <KeyContext.Provider value={contextValue}>{children}</KeyContext.Provider>
  );
}
