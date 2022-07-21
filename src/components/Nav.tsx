import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "" },
  { label: "Settings", path: "settings" },
];

export function Nav() {
  return (
    <nav>
      {navItems.map(({ label, path }) => (
        <Link to={path}>
          <div>{label}</div>
        </Link>
      ))}
    </nav>
  );
}
