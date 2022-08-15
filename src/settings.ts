import { FiGlobe, FiDatabase, FiShare2 } from "react-icons/fi";

export const bundles = [
  {
    id: 1,
    name: "Blockchain Basics",
    description: "Decentralized by default",
    icon: FiGlobe,
  },
  {
    id: 2,
    name: "Web2 Essentials",
    description: "Tried and true functionality",
    icon: FiDatabase,
  },
  {
    id: 3,
    name: "Community Integrations",
    description: "Connect and conquer",
    icon: FiShare2,
  },
];

export const modules = [
  {
    name: "Blocks",
    description: "Write to an immutable public data structure",
    bundleId: 1,
  },
  {
    name: "Ledger",
    description: "Mint your own tokens",
    bundleId: 1,
    enabled: true,
    fields: [
      { key: "genesis", label: "Genesis State", type: "file" },
      { key: "symbol", label: "Symbol", type: "text", value: "MFX" },
      { key: "supply", label: "Supply", type: "number", value: 100_000_000 },
    ],
  },
  {
    name: "Accounts",
    description: "Send transactions, check balances",
    bundleId: 1,
  },
  {
    name: "Web",
    description: "Translate HTTP requests to Many messages",
    bundleId: 2,
  },
  {
    name: "Dictionary",
    description: "Map keys to arbitrary values",
    bundleId: 2,
  },
  {
    name: "Names",
    description: "Map human-readable text to Many addresses",
    bundleId: 2,
  },
  {
    name: "Files",
    description: "Store and retrieve data as files",
    bundleId: 2,
  },
  {
    name: "git",
    description: "Push, pull, fork, and more",
    bundleId: 3,
  },
];
