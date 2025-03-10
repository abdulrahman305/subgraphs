import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

////////////////////////
///// Schema Enums /////
////////////////////////

// The network names corresponding to the Network enum in the schema.
// They also correspond to the ones in `dataSource.network()` after converting to lower case.
// See below for a complete list:
// https://thegraph.com/docs/en/hosted-service/what-is-hosted-service/#supported-networks-on-the-hosted-service
export namespace Network {
  export const ARBITRUM_ONE = "ARBITRUM_ONE";
  export const ARWEAVE_MAINNET = "ARWEAVE_MAINNET";
  export const AVALANCHE = "AVALANCHE";
  export const BOBA = "BOBA";
  export const AURORA = "AURORA";
  export const BSC = "BSC"; // aka BNB Chain
  export const CELO = "CELO";
  export const COSMOS = "COSMOS";
  export const CRONOS = "CRONOS";
  export const MAINNET = "MAINNET"; // Ethereum mainnet
  export const FANTOM = "FANTOM";
  export const FUSE = "FUSE";
  export const HARMONY = "HARMONY";
  export const JUNO = "JUNO";
  export const MOONBEAM = "MOONBEAM";
  export const MOONRIVER = "MOONRIVER";
  export const NEAR_MAINNET = "NEAR_MAINNET";
  export const OPTIMISM = "OPTIMISM";
  export const OSMOSIS = "OSMOSIS";
  export const MATIC = "MATIC"; // aka Polygon
  export const XDAI = "XDAI"; // aka Gnosis Chain
}

export namespace ProtocolType {
  export const EXCHANGE = "EXCHANGE";
  export const LENDING = "LENDING";
  export const YIELD = "YIELD";
  export const BRIDGE = "BRIDGE";
  export const GENERIC = "GENERIC";
}

export namespace LiquidityPoolFeeType {
  export const FIXED_TRADING_FEE = "FIXED_TRADING_FEE";
  export const TIERED_TRADING_FEE = "TIERED_TRADING_FEE";
  export const DYNAMIC_TRADING_FEE = "DYNAMIC_TRADING_FEE";
  export const FIXED_LP_FEE = "FIXED_LP_FEE";
  export const DYNAMIC_LP_FEE = "DYNAMIC_LP_FEE";
  export const FIXED_PROTOCOL_FEE = "FIXED_PROTOCOL_FEE";
  export const DYNAMIC_PROTOCOL_FEE = "DYNAMIC_PROTOCOL_FEE";
}

export namespace RewardTokenType {
  export const DEPOSIT = "DEPOSIT";
  export const BORROW = "BORROW";
}

export namespace LendingType {
  export const CDP = "CDP";
  export const POOLED = "POOLED";
}

export namespace RiskType {
  export const GLOBAL = "GLOBAL";
  export const ISOLATED = "ISOLATED";
}

export namespace InterestRateType {
  export const STABLE = "STABLE";
  export const VARIABLE = "VARIABLE";
  export const FIXED_TERM = "FIXED_TERM";
}

export namespace InterestRateSide {
  export const LENDER = "LENDER";
  export const BORROWER = "BORROWER";
}

export namespace UsageType {
  export const DEPOSIT = "DEPOSIT";
  export const WITHDRAW = "WITHDRAW";
  export const SWAP = "SWAP";
}

export namespace RewardIntervalType {
  export const BLOCK = "BLOCK";
  export const TIMESTAMP = "TIMESTAMP";
}

export namespace NULL {
  export const TYPE_STRING = "0x0000000000000000000000000000000000000000";
  export const TYPE_ADDRESS = Address.fromString(TYPE_STRING);
}

export namespace Protocol {
  export const NAME = "Balancer v2";
  export const SLUG = "balancer-v2";
  export const NETWORK = Network.MAINNET;
}

export namespace MasterChef {
  export const MINICHEF = "MINICHEF";
  export const MASTERCHEF = "MASTERCHEF";
  export const MASTERCHEFV2 = "MASTERCHEFV2";
  export const MASTERCHEFV3 = "MASTERCHEFV3";
}

export const SECONDS_PER_HOUR = 60 * 60;
export const SECONDS_PER_DAY = 60 * 60 * 24;
export const MAX_BPS = BigInt.fromI32(10000);
export const DEFAULT_DECIMALS = BigInt.fromI32(18);

export const INT_ZERO = 0 as i32;
export const INT_ONE = 1 as i32;

export const BIGINT_NEG_ONE = BigInt.fromI32(-1);
export const BIGINT_ZERO = BigInt.fromI32(0);
export const BIGINT_ONE = BigInt.fromI32(1);
export const BIGINT_TEN = BigInt.fromI32(10);
export const BIGINT_HUNDRED = BigInt.fromI32(100);
export const BIGINT_NEGATIVE_ONE = BigInt.fromString("-1");

export const BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);
export const BIGDECIMAL_ONE = new BigDecimal(BIGINT_ONE);
export const BIGDECIMAL_TEN = new BigDecimal(BIGINT_TEN);
export const BIGDECIMAL_HUNDRED = BigDecimal.fromString("100");
export const BIGDECIMAL_NEGATIVE_ONE = BigDecimal.fromString("-1");
export const BIGDECIMAL_POINT_FOUR = BigDecimal.fromString("0.4");

export const DEFAULT_DECIMALS_DENOMINATOR = BigDecimal.fromString(
  "1000000000000000000",
);
export const FEE_DENOMINATOR = DEFAULT_DECIMALS_DENOMINATOR;

export const USDC_DECIMALS = 6;
export const USDC_DENOMINATOR = BigDecimal.fromString("1000000");

export const PRICE_CACHING_BLOCKS = BigInt.fromI32(7000);

/////////////////////////////////////
///// Protocol/Network Specific /////
/////////////////////////////////////

export const VAULT_ADDRESS = Address.fromString(
  "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
);
export const PROTOCOL_FEES_COLLECTOR_ADDRESS = Address.fromString(
  "0xce88686553686DA562CE7Cea497CE749DA109f9F",
);
export const PROTOCOL_TOKEN_ADDRESS = Address.fromString(
  "0xba100000625a3754423978a60c9317c58a424e3D",
);
export const GAUGE_CONTROLLER_ADDRESS = Address.fromString(
  "0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD",
);
export const AAVE_BOOSTED_POOL_ADDRESS = Address.fromString(
  "0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2",
);
export const BLACKLISTED_PHANTOM_POOLS: Address[] = [
  Address.fromString("0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c"), // Balancer Aave Boosted Pool (USDT) OLD
  Address.fromString("0x804cdb9116a10bb78768d3252355a1b18067bf8f"), // Balancer Aave Boosted Pool (DAI) OLD
  Address.fromString("0x9210f1204b5a24742eba12f710636d76240df3d0"), // Balancer Aave Boosted Pool (USDC) OLD
  Address.fromString("0x2f4eb100552ef93840d5adc30560e5513dfffacb"), // Balancer Aave Boosted Pool (USDT)
  Address.fromString("0xae37d54ae477268b9997d4161b96b8200755935c"), // Balancer Aave Boosted Pool (DAI)
  Address.fromString("0x82698aecc9e28e9bb27608bd52cf57f704bd1b83"), // Balancer Aave Boosted Pool (USDC)
];

export const INFLATION_INTERVAL = "TIMESTAMP";
export const STARTING_INFLATION_RATE = BigDecimal.fromString(
  (0.23974867724).toString(),
).times(DEFAULT_DECIMALS_DENOMINATOR);
