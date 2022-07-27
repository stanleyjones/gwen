import { Outlet, Route, Routes } from "react-router-dom";
import { Layout, SignIn } from "./components";
import { Account, Users, Flows, Home, Settings, ModuleSettings } from "./views";
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
        <Route path="settings">
          <Route index element={<Settings />} />
          <Route path=":module" element={<ModuleSettings />} />
        </Route>
        <Route path="flows" element={<Flows />} />
        <Route path="users" element={<Users />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}

export default App;
