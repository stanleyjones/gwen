import { Link, useParams } from "react-router-dom";
import { Box, Flex, Button, Select, Heading, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export function ModuleSettings() {
  const { module } = useParams();
  return (
    <Box p={6}>
      <Flex>
        <Box>
          <Select bg="white">
            <option value="Manifest" selected>
              Public Neighborhood
            </option>
          </Select>
        </Box>
        <Box ml={6}>
          <Button
            to="/account"
            as={Link}
            color="brand.teal.500"
            leftIcon={<FiPlus />}
            variant="outline"
          >
            Start a Neighborhood
          </Button>
        </Box>
      </Flex>
      <Heading mt={6}>
        <Text as={Link} to="/settings" color="brand.teal.500">
          Settings
        </Text>{" "}
        / {module}
      </Heading>
    </Box>
  );
}
