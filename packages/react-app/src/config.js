import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x66282354ffE0Cc165c41D0fea7Dac6C0f670B4bB";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/C7ziR0olFXsvbs85y-pkO4BgBQGOdoFi",
  },
};
