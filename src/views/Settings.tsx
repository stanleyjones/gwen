import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
  Select,
  Spacer,
} from "@chakra-ui/react";
import {
  FiPlus,
  FiBox,
  FiGlobe,
  FiDatabase,
  FiSearch,
  FiShare2,
} from "react-icons/fi";

const bundles = [
  {
    name: "Blockchain Basics",
    description: "Decentralized by default",
    icon: FiGlobe,
  },
  {
    name: "Web2 Essentials",
    description: "Tried and true functionality",
    icon: FiDatabase,
  },
  {
    name: "Community Integrations",
    description: "Connect and conquer",
    icon: FiShare2,
  },
];

const modules = [
  {
    name: "Ledger",
    description: "Mint your own tokens",
    bundle: "Blockchain Basics",
  },
  {
    name: "Accounts",
    description: "Transact to win",
    bundle: "Blockchain Basics",
  },
  {
    name: "Blocks",
    description: "Chain all the blocks",
    bundle: "Blockchain Basics",
  },
  {
    name: "Web",
    description: "Translate HTTP requests",
    bundle: "Web2 Essentials",
  },
  {
    name: "Name",
    description: "Map names to addresses",
    bundle: "Web2 Essentials",
  },
  {
    name: "Files",
    description: "Store stuff on chain",
    bundle: "Web2 Essentials",
  },
  {
    name: "git",
    description: "Push, pull, and more",
    bundle: "Community Integrations",
  },
];

export function Settings() {
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
        <Spacer />
        <Box>
          <InputGroup>
            <InputRightElement pointerEvents="none" children={<FiSearch />} />
            <Input type="search" placeholder="Search Modules" bg="white" />
          </InputGroup>
        </Box>
      </Flex>
      <Heading mt={6}>Settings</Heading>
      {bundles.map(({ name: bundleName, description, icon: BundleIcon }) => (
        <Box border="2px solid white" borderRadius="lg" mt={6} p={6}>
          <Flex>
            <Icon as={BundleIcon} h={9} w={9} mr={3} color="brand.teal.500" />
            <Box>
              <Heading size="md">{bundleName}</Heading>
              <Text size="md" mb={3} color="brand.brown.500">
                {description}
              </Text>
            </Box>
          </Flex>
          <Wrap>
            {modules
              .filter(({ bundle }) => bundle === bundleName)
              .map(({ name, description, bundle }) => (
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
