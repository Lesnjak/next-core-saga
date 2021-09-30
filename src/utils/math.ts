import BigNumber from 'bignumber.js';

/**
 * Custom math functions with BigNumber library
 */
export function add(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): BigNumber {
  return new BigNumber(a).plus(new BigNumber(b));
}

export function minus(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): BigNumber {
  return new BigNumber(a).minus(new BigNumber(b));
}

export function dividedBy(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): BigNumber {
  return new BigNumber(a).dividedBy(new BigNumber(b));
}

export function dividedToIntegerBy(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): BigNumber {
  return new BigNumber(a).dividedToIntegerBy(new BigNumber(b));
}

export function multipliedBy(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): BigNumber {
  return new BigNumber(a).multipliedBy(new BigNumber(b));
}

export function toFixed(a: string | number | BigNumber, decimal = 0): string {
  return new BigNumber(a).toFixed(decimal, BigNumber.ROUND_FLOOR);
}

export function toNumber(a: string | number | BigNumber): number {
  return new BigNumber(a).toNumber();
}

export function isGreaterThan(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): boolean {
  return new BigNumber(a).isGreaterThan(new BigNumber(b));
}

export function isGreaterThanOrEqualTo(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): boolean {
  return new BigNumber(a).isGreaterThanOrEqualTo(new BigNumber(b));
}

export function isEqualTo(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): boolean {
  return new BigNumber(a).isEqualTo(new BigNumber(b));
}

export function isLessThan(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): boolean {
  return new BigNumber(a).isLessThan(new BigNumber(b));
}

export function isLessThanOrEqual(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): boolean {
  return new BigNumber(a).isLessThanOrEqualTo(new BigNumber(b));
}

export function abs(a: string | number | BigNumber): number {
  return new BigNumber(a).abs().toNumber();
}

export function min(...args: (string | number | BigNumber)[]): BigNumber {
  return BigNumber.min(...args);
}

export function isFinite(value: string | number | BigNumber): boolean {
  return new BigNumber(value).isFinite();
}

export function subtract(
  a: string | number | BigNumber,
  b: string | number | BigNumber
): BigNumber {
  return new BigNumber(a).minus(new BigNumber(b));
}
