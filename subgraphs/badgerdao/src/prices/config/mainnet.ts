/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Address, BigInt, TypedMap } from "@graphprotocol/graph-ts";
import { Configurations, ContractInfo, TokenInfo } from "../common/types";

export const NETWORK_STRING = "mainnet";

///////////////////////////////////////////////////////////////////////////
///////////////////// CALCULATIONS/ORACLE CONTRACT ////////////////////////
///////////////////////////////////////////////////////////////////////////

export const YEARN_LENS_CONTRACT_ADDRESS = ContractInfo.set(
  Address.fromString("0x83d95e0d5f402511db06817aff3f9ea88224b030"),
  BigInt.fromI32(12242339),
);

export const INCH_ORACLE_CONTRACT_ADDRESS = ContractInfo.set(
  Address.fromString("0x07d91f5fb9bf7798734c3f606db065549f6893bb"),
  BigInt.fromI32(12522266),
);

export const CHAIN_LINK_CONTRACT_ADDRESS = ContractInfo.set(
  Address.fromString("0x47fb2585d2c56fe188d0e6ec628a38b74fceeedf"),
  BigInt.fromI32(12864088),
);

///////////////////////////////////////////////////////////////////////////
///////////////////////////// CURVE CONTRACT //////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const CURVE_CALCULATIONS_ADDRESS = ContractInfo.set(
  Address.fromString("0x25bf7b72815476dd515044f9650bf79bad0df655"),
  BigInt.fromI32(12370088),
);

export const CURVE_REGISTRY_ADDRESSES = [
  ContractInfo.set(
    Address.fromString("0x7d86446ddb609ed0f5f8684acf30380a356b2b4c"),
    BigInt.fromI32(11154794),
  ),
  ContractInfo.set(
    Address.fromString("0x8f942c20d02befc377d41445793068908e2250d0"),
    BigInt.fromI32(13986752),
  ),
];

///////////////////////////////////////////////////////////////////////////
/////////////////////////// UNISWAP FORKS CONTRACT ////////////////////////
///////////////////////////////////////////////////////////////////////////

export const SUSHISWAP_CALCULATIONS_ADDRESS = ContractInfo.set(
  Address.fromString("0x5ea7e501c9a23f4a76dc7d33a11d995b13a1dd25"),
  BigInt.fromI32(2396120),
);

export const UNISWAP_FORKS_ROUTER_ADDRESSES = [
  ContractInfo.set(
    Address.fromString("0x7a250d5630b4cf539739df2c5dacb4c659f2488d"), // Uniswap
    BigInt.fromI32(10207858),
  ),
  ContractInfo.set(
    Address.fromString("0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f"), // SushiSwap
    BigInt.fromI32(10794261),
  ),
];

///////////////////////////////////////////////////////////////////////////
/////////////////////////// BLACKLISTED TOKENS ////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const YEARN_LENS_BLACKLIST: Address[] = [
  Address.fromString("0x5f98805a4e8be255a32880fdec7f6728c6568ba0"), // LUSD
  Address.fromString("0x8daebade922df735c38c80c7ebd708af50815faa"), // tBTC
  Address.fromString("0x0316eb71485b0ab14103307bf65a021042c6d380"), // Huobi BTC
  Address.fromString("0xca3d75ac011bf5ad07a98d02f18225f9bd9a6bdf"), // crvTriCrypto
  Address.fromString("0xae7ab96520de3a18e5e111b5eaab095312d7fe84"), // stETH
  Address.fromString("0x798d1be841a82a273720ce31c822c61a67a601c3"), // Digg
];
export const CURVE_CALCULATIONS_BLACKSLIST: Address[] = [
  Address.fromString("0xca3d75ac011bf5ad07a98d02f18225f9bd9a6bdf"), // crvTriCrypto
  Address.fromString("0xc4ad29ba4b3c580e6d59105fff484999997675ff"), // crv3Crypto
  Address.fromString("0x798d1be841a82a273720ce31c822c61a67a601c3"), // Digg
];
export const INCH_ORACLE_BLACKLIST: Address[] = [];
export const AAVE_ORACLE_BLACKLIST: Address[] = [
  Address.fromString("0x798d1be841a82a273720ce31c822c61a67a601c3"), // Digg
];
export const SUSHI_CALCULATIONS_BLACKSLIST: Address[] = [];

///////////////////////////////////////////////////////////////////////////
//////////////////////////// HARDCODED STABLES ////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const HARDCODED_STABLES: Address[] = [
  Address.fromString("0xd632f22692fac7611d2aa1c0d552930d43caed3b"), // Curve.fi Factory USD Metapool: Frax
  Address.fromString("0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3"), // Magic Internet Money
  Address.fromString("0x5a6a4d54456819380173272a5e8e9b9904bdf41b"), // Curve.fi Factory USD Metapool: Magic Internet Money 3Pool
  Address.fromString("0xbc6da0fe9ad5f3b0d58160288917aa56653660e9"), // Alchemix USD
  Address.fromString("0x43b4fdfd4ff969587185cdb6f0bd875c5fc83f8c"), // Curve.fi Factory USD Metapool: Alchemix USD
  Address.fromString("0x57ab1ec28d129707052df4df418d58a2d46d5f51"), // Synth SUSD
  Address.fromString("0xc25a3a3b969415c80451098fa907ec722572917f"), // Curve.fi DAI/USDC/USDT/sUSD
  Address.fromString("0x0000000000085d4780b73119b644ae5ecd22b376"), // TrueUSD
  Address.fromString("0xecd5e75afb02efa118af914515d6521aabd189f1"), // Curve.fi Factory USD Metapool: TrueUSD
  Address.fromString("0xfd2a8fa60abd58efe3eee34dd494cd491dc14900"), // Curve.fi aDAI/aUSDC/aUSDT
  Address.fromString("0x8ee017541375f6bcd802ba119bddc94dad6911a1"), // Curve.fi Factory USD Metapool: PUSd
  Address.fromString("0x5b3b5df2bf2b6543f78e053bd91c4bdd820929f1"), // Curve.fi Factory USD Metapool: USDM
  Address.fromString("0x04b727c7e246ca70d496ecf52e6b6280f3c8077d"), // Curve.fi Factory USD Metapool: apeUSDFRAXBP
  Address.fromString("0x3175df0976dfa876431c2e9ee6bc45b65d3473cc"), // Curve.fi FRAX/USDC
  Address.fromString("0xbcb91e689114b9cc865ad7871845c95241df4105"), // Curve.fi Factory USD Metapool: PWRD Metapool
  Address.fromString("0x26ea744e5b887e5205727f55dfbe8685e3b21951"), // iearn USDC
  Address.fromString("0xc2cb1040220768554cf699b0d863a3cd4324ce32"), // iearn DAI
  Address.fromString("0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae"), // iearn BUSD
  Address.fromString("0xe6354ed5bc4b393a5aad09f21c46e101e692d447"), // iearn USDT
  Address.fromString("0x3b3ac5386837dc563660fb6a0937dfaa5924333b"), // Curve.fi yDAI/yUSDC/yUSDT/yBUSD
  Address.fromString("0xc2f5fea5197a3d92736500fd7733fcc7a3bbdf3f"), // Curve.fi Factory USD Metapool: fUSD-3pool
  Address.fromString("0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6"), // Decentralized USD
  Address.fromString("0x028171bca77440897b824ca71d1c56cac55b68a3"), // Aave interest bearing DAI
  Address.fromString("0x3ed3b47dd13ec9a98b44e6204a523e766b225811"), // Aave interest bearing USDT
  Address.fromString("0xbcca60bb61934080951369a648fb03df4f96263c"), // Aave interest bearing USDC
  Address.fromString("0x6c5024cd4f8a59110119c56f8933403a539555eb"), // Aave interest bearing SUSD
  Address.fromString("0xd71ecff9342a5ced620049e616c5035f1db98620"), // Synth sEUR
];

///////////////////////////////////////////////////////////////////////////
///////////////////////////////// HELPERS /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const WHITELISTED_TOKENS = new TypedMap<string, TokenInfo>();

WHITELISTED_TOKENS.set(
  "USDC",
  TokenInfo.set(
    "USDC",
    6,
    Address.fromString("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"),
  ),
);

WHITELISTED_TOKENS.set(
  "USDT",
  TokenInfo.set(
    "USDT",
    6,
    Address.fromString("0xdac17f958d2ee523a2206206994597c13d831ec7"),
  ),
);

WHITELISTED_TOKENS.set(
  "DAI",
  TokenInfo.set(
    "DAI",
    18,
    Address.fromString("0x6b175474e89094c44da98b954eedeac495271d0f"),
  ),
);

WHITELISTED_TOKENS.set(
  "WETH",
  TokenInfo.set(
    "WETH",
    18,
    Address.fromString("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),
  ),
);

WHITELISTED_TOKENS.set(
  "NATIVE_TOKEN",
  TokenInfo.set(
    "ETH",
    18,
    Address.fromString("0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"),
  ),
);

export class config implements Configurations {
  yearnLens(): ContractInfo | null {
    return YEARN_LENS_CONTRACT_ADDRESS;
  }
  yearnLensBlacklist(): Address[] {
    return YEARN_LENS_BLACKLIST;
  }

  inchOracle(): ContractInfo | null {
    return INCH_ORACLE_CONTRACT_ADDRESS;
  }
  inchOracleBlacklist(): Address[] {
    return INCH_ORACLE_BLACKLIST;
  }

  chainLink(): ContractInfo | null {
    return CHAIN_LINK_CONTRACT_ADDRESS;
  }

  aaveOracle(): ContractInfo | null {
    return null;
  }
  aaveOracleBlacklist(): Address[] {
    return AAVE_ORACLE_BLACKLIST;
  }

  curveCalculations(): ContractInfo | null {
    return CURVE_CALCULATIONS_ADDRESS;
  }
  curveCalculationsBlacklist(): Address[] {
    return CURVE_CALCULATIONS_BLACKSLIST;
  }

  sushiCalculations(): ContractInfo | null {
    return SUSHISWAP_CALCULATIONS_ADDRESS;
  }
  sushiCalculationsBlacklist(): Address[] {
    return SUSHI_CALCULATIONS_BLACKSLIST;
  }

  uniswapForks(): ContractInfo[] {
    return UNISWAP_FORKS_ROUTER_ADDRESSES;
  }
  curveRegistry(): ContractInfo[] {
    return CURVE_REGISTRY_ADDRESSES;
  }

  hardcodedStables(): Address[] {
    return HARDCODED_STABLES;
  }

  whitelistedTokens(): TypedMap<string, TokenInfo> {
    return WHITELISTED_TOKENS;
  }
}
