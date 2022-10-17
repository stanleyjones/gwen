import {
  RiBankCardLine,
  RiFlowChart,
  RiHome2Line,
  RiServerLine,
  RiUserLine,
} from "react-icons/ri";
import { Avatar, Image, Stack } from "@chakra-ui/react";

import { NavItem } from "../components";
import { useProfileContext } from "../providers/ProfileProvider";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Dashboard", path: "", icon: RiHome2Line },
  { label: "Services", path: "settings", icon: RiServerLine },
  { label: "Flows", path: "flows", icon: RiFlowChart },
  { label: "Users", path: "users", icon: RiUserLine },
  { label: "Billing", path: "account", icon: RiBankCardLine },
];

export function Nav() {
  const { profile } = useProfileContext();
  return (
    <Stack boxShadow="xl" h="100vh">
      <Image boxSize="6rem" src={logo} alt="Lifted Logo" p={3} />
      {navItems.map(NavItem)}
      <Avatar
        name={profile.name}
        src={profile.picture}
        sx={{ position: "absolute", bottom: 6, left: 6 }}
      />
    </Stack>
  );
}
