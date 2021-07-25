export default ({ IDL }) => {
  const Entry = IDL.Record({ 'content' : IDL.Text, 'author' : IDL.Text });
  const Id = IDL.Nat32;
  return IDL.Service({
    'insert' : IDL.Func([Entry], [], []),
    'lookup' : IDL.Func([IDL.Nat32], [IDL.Opt(Entry)], ['query']),
    'showEntries' : IDL.Func([], [IDL.Vec(IDL.Tuple(Id, Entry))], ['query']),
    'showSize' : IDL.Func([], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };