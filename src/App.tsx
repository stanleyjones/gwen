import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Layout, SignIn } from "./components";
import { Home, Settings } from "./views";
import "./App.css";

function App() {
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);
  if (!isAuthenticated) {
    return <SignIn setAuthenticated={setAuthenticated} />;
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
      </Route>
    </Routes>
  );
}

export default App;
