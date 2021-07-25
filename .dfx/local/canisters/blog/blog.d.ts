import type { Principal } from '@dfinity/agent';
export interface Entry {
  'content' : string,
  'author' : string,
};
export type Id = number;
export default interface _SERVICE {
  'insert' : (arg_0: Entry) => Promise<undefined>,
  'lookup' : (arg_0: number) => Promise<[] | [Entry]>,
  'showEntries' : () => Promise<Array<[Id, Entry]>>,
  'showSize' : () => Promise<bigint>,
};