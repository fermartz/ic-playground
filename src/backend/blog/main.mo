import Array "mo:base/Array";
import Map "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Nat32 "mo:base/Nat32";
import Iter "mo:base/Iter";

actor Blog {

    type Id = Nat32;

    type Entry = {
        author : Text;
        content : Text;
    };

    let entries = Map.HashMap<Id, Entry>(0, Nat32.equal, func (a : Nat32) : Nat32 {a});
    var nextEntryId : Id = 0;

    public func insert (entry : Entry): async () {
        entries.put(nextEntryId, entry);
        nextEntryId += 1;
    };
    public query func showSize () : async Nat {
        entries.size()
    };
    public query func lookup (id : Nat32) : async ?Entry {
        entries.get(id)
    };

    public query func showEntries () : async [(Id, Entry)] {
        Iter.toArray(entries.entries());
    };

    // public query func showEntries () : async ?[Entry] {
    //     entries.entries()
    // };
    // Add entry item utility
    // func add (entries : [Entry], author : Text, content : Text) : [Entry] {
    //     uniqueId += 1;
    //     let entry : Entry = {
    //         id = uniqueId;
    //         author = author;
    //         content = content;
    //     };
    //     Array.append(entries, [entry])
    // };
    // public func addNewEntry (author : Text, content : Text) : async () {
    //     entries := add(entries, author, content);
    // };

    // public query func showEntries () : async ?[Entry] {
    //     entries
    // };
        
    // public query func get(id0 : Nat) : async ?Entry {
    //     func isEq(entry : Entry) : Bool {
    //         entry.id == id0
    //     };
    //     switch (Array.find<Entry>(isEq, entries)) {
    //         case (null){
    //             return null;
    //         };
    //         case(?e){
    //             return ?{
    //                 id = e.id;
    //                 author = e.author;
    //                 content = e.content;
    //             };
    //         };
    //     };
        
    // };
}