import type { Principal } from '@dfinity/agent';
export type Name = string;
export type Phone = string;
export default interface _SERVICE {
  'add' : (arg_0: bigint) => Promise<bigint>,
  'clearall' : () => Promise<bigint>,
  'div' : (arg_0: bigint) => Promise<[] | [bigint]>,
  'getCalculatorResult' : () => Promise<bigint>,
  'getValue' : () => Promise<bigint>,
  'greet' : (arg_0: string) => Promise<string>,
  'hello' : () => Promise<string>,
  'increment' : () => Promise<undefined>,
  'insert' : (arg_0: Name, arg_1: Phone) => Promise<undefined>,
  'lookup' : (arg_0: Name) => Promise<[] | [Phone]>,
  'mul' : (arg_0: bigint) => Promise<bigint>,
  'sub' : (arg_0: bigint) => Promise<bigint>,
};