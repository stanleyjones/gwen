import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiBox, FiPlus, FiSearch } from "react-icons/fi";
import { bundles, modules } from "../settings";

export function Settings() {
  const [search, setSearch] = useState("");
  return (
    <Box p={6}>
      <Flex>
        <Heading>Settings</Heading>
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
        <Spacer />
        <Box>
          <InputGroup>
            <InputRightElement pointerEvents="none" children={<FiSearch />} />
            <Input
              type="search"
              placeholder="Search Modules"
              bg="white"
              onChange={(ev) => setSearch(ev.target.value)}
            />
          </InputGroup>
        </Box>
      </Flex>
      {bundles.map(({ id, name, description, icon: BundleIcon }) => (
        <Box key={id} mt={6} p={6} border="1px solid white" borderRadius="lg">
          <Flex>
            <Icon as={BundleIcon} h={9} w={9} mr={3} color="brand.teal.500" />
            <Box>
              <Heading size="md">{name}</Heading>
              <Text size="md" mb={3} color="brand.brown.500">
                {description}
              </Text>
            </Box>
          </Flex>
          <Wrap>
            {modules
              .filter(({ name, description }) =>
                (name + description)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .filter(({ bundleId }) => bundleId === id)
              .map(({ name, description }) => (
                <WrapItem
                  w="15rem"
                  bg="white"
                  borderRadius="lg"
                  p={3}
                  key={name}
                >
                  <Flex as={Link} to={name}>
                    <Box mr={3}>
                      <Icon color="brand.teal.500" h={9} w={9} as={FiBox} />
                    </Box>
                    <Box>
                      <Heading size="sm" mb={1}>
                        {name}
                      </Heading>
                      <Text>{description}</Text>
                    </Box>
                  </Flex>
                </WrapItem>
              ))}
          </Wrap>
        </Box>
      ))}
    </Box>
  );
}
