import { Link } from "react-router-dom";
import { FiHome, FiSettings, FiCode, FiUsers, FiGift } from "react-icons/fi";
import { Avatar, Center, Stack, IconButton, Box, Text } from "@chakra-ui/react";
import { useProfileContext } from "../providers/ProfileProvider";

const navItems = [
  { label: "Home", path: "", Icon: FiHome },
  { label: "Settings", path: "settings", Icon: FiSettings },
  { label: "Flows", path: "flows", Icon: FiCode },
  { label: "Users", path: "users", Icon: FiUsers },
  { label: "Account", path: "account", Icon: FiGift },
];

export function Nav() {
  const { profile } = useProfileContext();
  return (
    <Stack direction="column" className="Nav">
      {navItems.map(({ label, path, Icon }) => {
        return (
          <Link to={path}>
            <Box p="2">
              <Center>
                <IconButton
                  icon={<Icon />}
                  aria-label={label}
                  variant="outline"
                />
              </Center>
              <Center>
                <Text>{label}</Text>
              </Center>
            </Box>
          </Link>
        );
      })}
      <Avatar
        name={profile.name}
        src={profile.picture}
        sx={{ position: "absolute", bottom: 6, left: 6 }}
      />
    </Stack>
  );
}
