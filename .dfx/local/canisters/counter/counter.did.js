export default ({ IDL }) => {
  return IDL.Service({
    'getValue' : IDL.Func([], [IDL.Nat], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'hello' : IDL.Func([], [IDL.Text], ['query']),
    'increment' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };