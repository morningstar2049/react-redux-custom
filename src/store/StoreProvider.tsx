import React from "react";
import { CreateStoreType } from "./createStore";

type StoreProviderProps = {
  children: React.ReactNode;
  store: CreateStoreType;
};

export function StoreProvider(props: StoreProviderProps) {
  const StoreContext = React.createContext({});

  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
}
