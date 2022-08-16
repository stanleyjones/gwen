import { Box, Stack, Text, Heading } from "@chakra-ui/react";

interface IStat {
  label: string;
  value: string;
}

export function Stat({ label, value }: IStat) {
  return (
    <Box
      key={label}
      px={{ base: "4", md: "6" }}
      py={{ base: "5", md: "6" }}
      bg="white"
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading>{value}</Heading>
      </Stack>
    </Box>
  );
}
