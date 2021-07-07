export default ({ IDL }) => {
  const Name = IDL.Text;
  const Phone = IDL.Text;
  return IDL.Service({
    'add' : IDL.Func([IDL.Int], [IDL.Int], []),
    'clearall' : IDL.Func([], [IDL.Int], []),
    'div' : IDL.Func([IDL.Int], [IDL.Opt(IDL.Int)], []),
    'getCalculatorResult' : IDL.Func([], [IDL.Int], ['query']),
    'getValue' : IDL.Func([], [IDL.Nat], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'hello' : IDL.Func([], [IDL.Text], ['query']),
    'increment' : IDL.Func([], [], []),
    'insert' : IDL.Func([Name, Phone], [], []),
    'lookup' : IDL.Func([Name], [IDL.Opt(Phone)], ['query']),
    'mul' : IDL.Func([IDL.Int], [IDL.Int], []),
    'sub' : IDL.Func([IDL.Int], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };