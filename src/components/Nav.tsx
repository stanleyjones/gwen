import { Link } from "react-router-dom";
import { FiHome, FiSettings, FiCode, FiUsers, FiGift } from "react-icons/fi";
import "./Nav.css";
import { useProfileContext } from "../providers/ProfileProvider";

const navItems = [
  { label: "Home", path: "", icon: FiHome },
  { label: "Settings", path: "settings", icon: FiSettings },
  { label: "Flows", path: "flows", icon: FiCode },
  { label: "Users", path: "users", icon: FiUsers },
  { label: "Account", path: "account", icon: FiGift },
];

export function Nav() {
  const { profile } = useProfileContext();
  return (
    <nav className="Nav">
      {navItems.map(({ label, path, icon }) => {
        const Icon = icon;
        return (
          <Link to={path} key={path}>
            <Icon color="gray" />
            <div>{label}</div>
          </Link>
        );
      })}
      <div className="profile">
        <img src={profile.picture} />
        {profile.name}
      </div>
    </nav>
  );
}
