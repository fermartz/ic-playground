import type { Principal } from '@dfinity/agent';
export interface ToDo {
  'id' : bigint,
  'completed' : boolean,
  'description' : string,
};
export default interface _SERVICE {
  'addTodo' : (arg_0: string) => Promise<undefined>,
  'clear' : () => Promise<Array<ToDo>>,
  'showTodos' : () => Promise<Array<ToDo>>,
};