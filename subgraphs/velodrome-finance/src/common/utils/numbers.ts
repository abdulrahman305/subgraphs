import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import {
  BIGDECIMAL_ONE,
  BIGDECIMAL_TWO,
  BIGDECIMAL_ZERO,
  BIGINT_TWO,
  BIGINT_ZERO,
  INT_ZERO,
} from "../constants";

export function bigIntToBigDecimal(
  quantity: BigInt,
  decimals: i32 = 18,
): BigDecimal {
  return quantity.divDecimal(
    BigInt.fromI32(10)
      .pow(decimals as u8)
      .toBigDecimal(),
  );
}

// returns 10^exp
export function exponentToBigDecimal(exp: i32): BigDecimal {
  let bd = BigDecimal.fromString("1");
  const ten = BigDecimal.fromString("10");
  for (let i = 0; i < exp; i++) {
    bd = bd.times(ten);
  }
  return bd;
}

// convert emitted values to tokens count
export function applyDecimals(tokenAmount: BigInt, decimals: i32): BigDecimal {
  if (decimals == INT_ZERO) {
    return tokenAmount.toBigDecimal();
  }

  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(decimals));
}

// a fast approximation of (1 + rate)^exponent
export function bigDecimalExponential(
  rate: BigDecimal,
  exponent: BigDecimal,
): BigDecimal {
  // binomial expansion to obtain (1 + x)^n : (1 + rate)^exponent
  // 1 + n *x + (n/2*(n-1))*x**2+(n/6*(n-1)*(n-2))*x**3+(n/12*(n-1)*(n-2)*(n-3))*x**4
  // this is less precise, but more efficient than `powerBigDecimal` when power is big
  let firstTerm = exponent.times(rate);
  let secondTerm = exponent
    .div(BIGDECIMAL_TWO)
    .times(exponent.minus(BIGDECIMAL_ONE))
    .times(rate.times(rate));
  let thirdTerm = exponent
    .div(BIGDECIMAL_SIX)
    .times(exponent.minus(BIGDECIMAL_TWO))
    .times(rate.times(rate).times(rate));
  let fourthTerm = exponent
    .div(BIGDECIMAL_TWELVE)
    .times(exponent.minus(BIGDECIMAL_THREE))
    .times(rate.times(rate).times(rate).times(rate));
  return firstTerm.plus(secondTerm).plus(thirdTerm).plus(fourthTerm);
}

export function calculateAverage(prices: BigDecimal[]): BigDecimal {
  let sum = BigDecimal.fromString("0");
  for (let i = 0; i < prices.length; i++) {
    sum = sum.plus(prices[i]);
  }

  return sum.div(
    BigDecimal.fromString(BigInt.fromI32(prices.length).toString()),
  );
}

export function calculateMedian(prices: BigDecimal[]): BigDecimal {
  let sorted = prices.sort((a, b) => {
    return a.equals(b) ? 0 : a.gt(b) ? 1 : -1;
  });

  let mid = Math.ceil(sorted.length / 2) as i32;
  if (sorted.length % 2 == 0) {
    return sorted[mid].plus(sorted[mid - 1]).div(BigDecimal.fromString("2"));
  }

  return sorted[mid - 1];
}

// Ray is 27 decimal Wad is 18 decimal
// These functions were made for the AAVE subgraph. Visit the following link to verify that AAVE's definition for RAY units match what are needed for your protocol
// https://docs.aave.com/developers/v/2.0/glossary

export function rayToWad(a: BigInt): BigInt {
  const halfRatio = BigInt.fromI32(10).pow(9).div(BigInt.fromI32(2));
  return halfRatio.plus(a).div(BigInt.fromI32(10).pow(9));
}

export function wadToRay(a: BigInt): BigInt {
  const result = a.times(BigInt.fromI32(10).pow(9));
  return result;
}

export function round(numberToRound: BigDecimal): BigDecimal {
  let parsedNumber: number = parseFloat(numberToRound.toString());
  let roundedNumber: number =
    Math.ceil((parsedNumber + Number.EPSILON) * 100) / 100;
  return BigDecimal.fromString(roundedNumber.toString());
}

export function safeDiv(
  numerator: BigDecimal,
  denominator: BigDecimal,
): BigDecimal {
  let result = BIGDECIMAL_ZERO;
  if (denominator != BIGDECIMAL_ZERO) {
    result = numerator.div(denominator);
  }
  return result;
}
