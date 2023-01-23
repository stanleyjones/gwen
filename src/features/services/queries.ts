import { useNetworkContext } from "features/network";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import {
  useDataServiceStore,
  CreateTokenInputs,
  PutValueInputs,
} from "features/services";

interface LedgerInfoResponse {
  symbols: Map<string, string>;
}

interface TokenInfo {
  info: {
    address: string;
    summary: {
      name: string;
      symbol: string;
      precision: number;
    };
    owner: string;
  };
}

export function useTokenList() {
  const [network] = useNetworkContext();
  const query = useQuery<LedgerInfoResponse, Error>({
    queryKey: ["ledger.tokens", network?.url],
    queryFn: async () => await network?.ledger.info(),
    enabled: !!network?.url,
  });
  const data = query.data?.symbols;
  return { ...query, data };
}

export function useTokenInfo() {
  const [network] = useNetworkContext();
  const { data: tokenListData = new Map() } = useTokenList();
  const queries = useQueries<TokenInfo[]>({
    queries: [...tokenListData.entries()].map(([address]) => ({
      queryKey: ["tokens.info", address, network?.url],
      queryFn: async () => await network?.tokens.info({ address }),
    })),
  });
  const data = queries.map(({ data }) => {
    const token = data as TokenInfo;
    return token
      ? {
          name: token.info.summary.name,
          address: token.info.address.toString(),
          symbol: token.info.summary.symbol,
        }
      : {
          name: "",
          address: "",
          symbol: "",
        };
  });
  return {
    isLoading: queries.some((query) => query.isLoading),
    isError: queries.some((query) => query.isError),
    data,
  };
}

export function useCreateToken() {
  // eslint-disable-next-line
  const [_, network] = useNetworkContext();
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, CreateTokenInputs>({
    mutationFn: async (inputs: CreateTokenInputs) => {
      const precision = 9;
      const amount = BigInt(parseInt(inputs.amount) * 10 ** precision);
      const symbol = inputs.symbol.toUpperCase();

      const param = {
        summary: {
          name: inputs.name,
          symbol,
          precision,
        },
        owner: inputs.address,
        distribution: {
          [inputs.address]: amount,
        },
      };
      network?.tokens.create(param);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["ledger.tokens", network?.url],
      }),
  });
}

export function usePutValue() {
  // eslint-disable-next-line
  const [_, network] = useNetworkContext();
  const queryClient = useQueryClient();
  const addKey = useDataServiceStore((s) => s.addKey);

  return useMutation<unknown, Error, PutValueInputs>({
    mutationFn: async (inputs: PutValueInputs) => {
      await network?.kvStore.put(inputs);
    },
    onSuccess: (_, inputs) => {
      addKey(inputs.key);

      // @TODO: Invalidate the query from liftedinit/roadmap#17
      queryClient.invalidateQueries({
        queryKey: ["", network?.url],
      });
    },
  });
}

export function useGetValue() {
  // eslint-disable-next-line
  const [_, network] = useNetworkContext();
  const keys = useDataServiceStore((s) => s.keys);

  const queries = useQueries<TokenInfo[]>({
    queries: keys.map((key) => ({
      queryKey: ["kvstore.get", key, network?.url],
      queryFn: async () => {
        const { value } = await network?.kvStore.get({ key });
        return { key, value: value.toString() };
      },
    })),
  });
  return {
    isLoading: queries.some((query) => query.isLoading),
    isError: queries.some((query) => query.isError),
    data: queries.map(({ data }) => data),
  };
}
