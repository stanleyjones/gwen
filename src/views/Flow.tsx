import { useParams, Link } from "react-router-dom";
import { Box, Text, Heading } from "@chakra-ui/react";
import { NodeEditor, FlumeConfig, Colors, Controls } from "flume";
import "../theme/flume.css";

interface INodePresets {
  flow: string;
  name: string;
  nodes: any;
}

const NODES: INodePresets[] = [
  {
    flow: "web-server",
    name: "Web Server",
    nodes: {
      MwZnZwVA3J: {
        x: -432,
        y: -201,
        type: "string",
        width: 200,
        connections: {
          inputs: {},
          outputs: { string: [{ nodeId: "Oan5KoIZxo", portName: "string" }] },
        },
        inputData: { string: { string: "Hello World" } },
        id: "MwZnZwVA3J",
      },
      Oan5KoIZxo: {
        x: 100,
        y: 0,
        type: "web",
        width: 200,
        connections: {
          inputs: { string: [{ nodeId: "MwZnZwVA3J", portName: "string" }] },
          outputs: {},
        },
        inputData: { string: { string: "" } },
        id: "Oan5KoIZxo",
      },
    },
  },
];

const config = new FlumeConfig();
config
  .addPortType({
    type: "string",
    name: "string",
    label: "Text",
    color: Colors.green,
    controls: [
      Controls.text({
        name: "string",
        label: "Text",
      }),
    ],
  })
  .addNodeType({
    type: "string",
    label: "Text Element",
    description: "Outputs a string of text",
    inputs: (ports: any) => [ports.string()],
    outputs: (ports: any) => [ports.string()],
  })
  .addNodeType({
    type: "web",
    label: "Web Module",
    description: "Serves a directory of files",
    inputs: (ports: any) => [ports.string()],
  });

export function Flow() {
  const { flow } = useParams();
  const preset = NODES.find((preset) => preset.flow === flow);
  const { nodes, name } = preset
    ? preset
    : { nodes: undefined, name: "Untitled" };
  return (
    <Box p={6}>
      <Heading>
        <Text as={Link} to="/flows" color="brand.teal.500">
          Flows
        </Text>{" "}
        / {name}
      </Heading>
      <Box h="90vh" w="100%">
        <NodeEditor
          portTypes={config.portTypes}
          nodeTypes={config.nodeTypes}
          // onChange={(nodes: any) => console.log(JSON.stringify(nodes))}
          nodes={nodes}
        />
      </Box>
    </Box>
  );
}
