import React from "react";
import { Nav } from "../components";

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
}
