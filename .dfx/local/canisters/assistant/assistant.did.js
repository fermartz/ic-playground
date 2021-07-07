export default ({ IDL }) => {
  const ToDo = IDL.Record({
    'id' : IDL.Nat,
    'completed' : IDL.Bool,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'addTodo' : IDL.Func([IDL.Text], [], []),
    'clear' : IDL.Func([], [IDL.Vec(ToDo)], []),
    'showTodos' : IDL.Func([], [IDL.Vec(ToDo)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };