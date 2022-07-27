import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const stats = [
  { label: "Requests per Second", value: "572" },
  { label: "Median Response Time", value: "17ms" },
  { label: "Successful Requests", value: "100%" },
  { label: "Invalid Requests", value: "0" },
];

const data = {
  options: {
    xaxis: {
      categories: [
        2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],
    },
    colors: ["#38C7B4"],
    chart: { toolbar: { show: false } },
  },
  series: [
    {
      name: "BTC",
      data: [
        1, 350, 1242, 340, 450, 1290, 7600, 6200, 10599, 19850, 66974, 20700,
      ],
    },
  ],
};

export function Home() {
  return (
    <Box p={6}>
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "5", md: "6" }}>
        {stats.map(({ label, value }) => (
          <Box
            px={{ base: "4", md: "6" }}
            py={{ base: "5", md: "6" }}
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
          >
            <Stack>
              <Text fontSize="sm" color="muted">
                {label}
              </Text>
              <Heading>{value}</Heading>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={2} gap="6" sx={{ marginTop: 6 }}>
        <Box bg="white" borderRadius="lg">
          <Chart type="bar" series={data.series} options={data.options} />
        </Box>
        <Box bg="white" borderRadius="lg">
          <Chart type="line" series={data.series} options={data.options} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
