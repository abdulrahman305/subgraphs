import {
  Address,
  BigInt,
  BigDecimal,
  Bytes,
  log,
} from "@graphprotocol/graph-ts";
import { Factory } from "../../../../../generated/Factory/Factory";
import {
  BIGDECIMAL_ONE,
  BIGDECIMAL_ZERO,
  FeeSwitch,
  Network,
  RewardIntervalType,
} from "../../../../../src/common/constants";
import { Configurations } from "../../../../../configurations/configurations/interface";
import { PROTOCOL_NAME, PROTOCOL_SLUG } from "../../../src/common/constants";
import { stringToBytesList } from "../../../../../src/common/utils/utils";

export class UniswapV3BaseConfigurations implements Configurations {
  getNetwork(): string {
    return Network.BASE;
  }
  getProtocolName(): string {
    return PROTOCOL_NAME;
  }
  getProtocolSlug(): string {
    return PROTOCOL_SLUG;
  }
  getFactoryAddress(): Bytes {
    return Bytes.fromHexString("0x33128a8fc17869897dce68ed026d694621f6fdfd");
  }
  getFactoryContract(): Factory {
    return Factory.bind(
      Address.fromString("0x33128a8fc17869897dce68ed026d694621f6fdfd"),
    );
  }
  getProtocolFeeOnOff(): string {
    return FeeSwitch.OFF;
  }
  getInitialProtocolFeeProportion(fee: i64): BigDecimal {
    log.warning("getProtocolFeeRatio is not implemented: {}", [fee.toString()]);
    return BIGDECIMAL_ZERO;
  }
  getProtocolFeeProportion(protocolFee: BigInt): BigDecimal {
    return BIGDECIMAL_ONE.div(protocolFee.toBigDecimal());
  }
  getRewardIntervalType(): string {
    return RewardIntervalType.NONE;
  }
  getReferenceToken(): Bytes {
    return Bytes.fromHexString("0x4200000000000000000000000000000000000006");
  }
  getRewardToken(): Bytes {
    return Bytes.fromHexString("");
  }
  getWhitelistTokens(): Bytes[] {
    return stringToBytesList([
      "0x4200000000000000000000000000000000000006", // weth
      "0x2ae3f1ec7f1f5012cfeab0185bfc7aa3cf0dec22", // coinbase wsETH
      "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", // usdc
    ]);
  }
  getStableCoins(): Bytes[] {
    return stringToBytesList([
      "0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca", // usdc
    ]);
  }
  getStableOraclePools(): Bytes[] {
    return stringToBytesList([
      "0x4c36388be6f416a29c8d8eee81c771ce6be14b18", // usdc-weth 0.05%
      "0x3ddf264ac95d19e81f8c25f4c300c4e59e424d43", // usdc-weth 0.3%
      "0xe584fe0c7505025c3819c82c99944b79a7cc009d", // usdc-weth 1%
    ]);
  }
  getUntrackedPairs(): Bytes[] {
    return stringToBytesList([]);
  }
  getUntrackedTokens(): Bytes[] {
    return stringToBytesList([
      "0x391ef60db8e7677c32d2c547ea1a009159558419", // Penguin
      "0x6eeb5859e32225cb61434dca63bca84bb0e735a7", // Magic Internet Memes
      "0x0d3031225f4471eafdb1707db807cbb00eb561cc", // Floating Point
      "0x18f377990e7ccecd8956a30603c9c17f5de9580d", // Belphin
      "0x0e1b2c65508b1cd9939cf90337fcefa647936a98", // 1155f0
      "0x0a7df211de68b10e9a833a42d8d30b9f0358ab6d", // Base Trade
    ]);
  }
  getMinimumLiquidityThreshold(): BigDecimal {
    return BigDecimal.fromString("10000");
  }
  getBrokenERC20Tokens(): Bytes[] {
    return stringToBytesList([]);
  }
}
