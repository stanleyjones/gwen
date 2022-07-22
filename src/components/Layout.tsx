import React from "react";
import { Nav } from "../components";
import "./Layout.css";

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="Layout">
      <Nav />
      <main className="Main">{children}</main>
    </div>
  );
}
