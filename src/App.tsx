import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Layout, SignIn } from "./components";
import { Account, Users, Flows, Home, Settings } from "./views";
import "./App.css";
import { useProfileContext } from "./providers/ProfileProvider";

function App() {
  const { profile } = useProfileContext();
  if (!profile) {
    return <SignIn />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="flows" element={<Flows />} />
        <Route path="users" element={<Users />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
