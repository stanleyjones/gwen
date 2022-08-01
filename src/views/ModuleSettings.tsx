import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Switch,
  Text,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { modules } from "../settings";

export function ModuleSettings() {
  const { module: name } = useParams();
  const module = modules.find((mod) => mod.name === name);
  return (
    <Box p={6}>
      <Flex>
        <Heading>
          <Text as={Link} to="/settings" color="brand.teal.500">
            Settings
          </Text>{" "}
          / {name}
        </Heading>
        <Box ml={6}>
          <Select bg="white" defaultValue="Manifest">
            <option value="Manifest">Public Neighborhood</option>
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
      <FormControl display="flex" mt={6}>
        <FormLabel htmlFor="enabled">Enabled?</FormLabel>
        <Switch id="enabled" colorScheme="brand" defaultChecked />
      </FormControl>

      {module &&
        module.fields?.map(({ key, label, type, value }) => (
          <FormControl key={key} width="15rem" mt={3}>
            <FormLabel htmlFor={key}>{label}</FormLabel>
            <Input type={type} bg="white" defaultValue={value} />
          </FormControl>
        ))}
      <Button mt={6}>Save</Button>
    </Box>
  );
}
