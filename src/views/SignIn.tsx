import { Dispatch, SetStateAction } from "react";
import { decodeJwt } from "jose";
import {
  Box,
  Center,
  Image,
  HStack,
  Text,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Icon,
  VisuallyHidden,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useExternalScript } from "../hooks";
import { useProfileContext } from "../providers/ProfileProvider";
import Logo from "../assets/logo.svg";
import {
  SiGithub as GitHubIcon,
  SiGoogle as GoogleIcon,
  SiTwitter as TwitterIcon,
} from "react-icons/si";
import ledgerLogo from "../assets/ledgerLogo.png";
import trezorLogo from "../assets/trezorLogo.png";

declare global {
  interface Window {
    google: any;
  }
}

const providers = [
  { name: "Google", icon: <Icon as={GoogleIcon} boxSize="5" /> },

  { name: "Twitter", icon: <Icon as={TwitterIcon} boxSize="5" /> },
  { name: "GitHub", icon: <Icon as={GitHubIcon} boxSize="5" /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);

const GOOGLE_CLIENT_LIBRARY = "https://accounts.google.com/gsi/client";
const GOOGLE_CLIENT_ID =
  "106980216616-kcvcr1nt0qep7oab6gt0s3ukbkqtc255.apps.googleusercontent.com";

const handleLoaded = (setProfile: Dispatch<SetStateAction<any>>) => {
  const google = window.google || {};
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: (res: any) => {
      const profile = decodeJwt(res.credential);
      setProfile(profile);
    },
  });
  google.accounts.id.renderButton(document.getElementById("signInWithGoogle"), {
    width: "370px",
    logo_alignment: "center",
  });
};

export function SignIn() {
  const { setProfile } = useProfileContext();
  useExternalScript(GOOGLE_CLIENT_LIBRARY, () => handleLoaded(setProfile));
  return (
    <Container maxW="lg" py={24} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Center>
          <Image w="5rem" src={Logo} />
        </Center>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="white"
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Button id="signInWithGoogle" bg="white"></Button>
            <Button color="white" bg="twitter.500" fontWeight="normal">
              <Icon as={TwitterIcon} w="1rem" mr={3} />
              Sign in with Twitter
            </Button>
            <Button color="white" bg="black" fontWeight="normal">
              <Icon as={GitHubIcon} w="1rem" mr={3} />
              Sign in with GitHub
            </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or
              </Text>
              <Divider />
            </HStack>
            <Button color="white" bg="#ff5300" fontWeight="normal">
              <Image src={ledgerLogo} w="1rem" mr={3} />
              Authenticate with Ledger
            </Button>
            <Button color="white" bg="#01B757" fontWeight="normal">
              <Image src={trezorLogo} w="1rem" mr={3} />
              Authenticate with Trezor
            </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or
              </Text>
              <Divider />
            </HStack>
            <Button fontWeight="normal">
              <Image src={Logo} w="1rem" mr={3} />
              Create an account
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
