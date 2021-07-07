import type { Principal } from '@dfinity/agent';
export default interface _SERVICE {
  'getValue' : () => Promise<bigint>,
  'greet' : (arg_0: string) => Promise<string>,
  'hello' : () => Promise<string>,
  'increment' : () => Promise<undefined>,
};