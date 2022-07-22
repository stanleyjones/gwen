import React from "react";
import { HashRouter } from "react-router-dom";
import { ProfileProvider } from "./ProfileProvider";

interface IAppProvider {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProvider) {
  return (
    <ProfileProvider>
      <HashRouter>{children}</HashRouter>
    </ProfileProvider>
  );
}
