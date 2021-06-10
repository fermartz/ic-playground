import L "mo:base/List";
import A "mo:base/AssocList";

actor {
    // Counter result
    stable var currentValue: Nat = 0;    
    // Calculator result
    var cell : Int = 0;
    // Phonebook
    public type Name = Text;
    public type Phone = Text;


    // Start Phonebook functions

    // The actor maps names to phone numbers.
    flexible var book: A.AssocList<Name, Phone> = L.nil<(Name, Phone)>();

    // An auxiliary function checks whether two names are equal.
    func nameEq(l: Name, r: Name): Bool {
        return l == r;
    };

    // A shared invokable function that inserts a new entry
    // into the phone book or replaces the previous one.
    public func insert(name: Name, phone: Phone): async () {
        let (newBook, _) = A.replace<Name, Phone>(book, name, nameEq, ?phone);
        book := newBook;
    };
    
    // A shared read-only query function that returns the (optional)
    // phone number corresponding to the person with the given name.
    public query func lookup(name: Name): async ?Phone {
        return A.find<Name, Phone>(book, name, nameEq);
    };

    // End Phonebook


    // Define functions to add, subtract, multiply, and divide
    public func add(n:Int) : async Int { cell += n; cell };
    public func sub(n:Int) : async Int { cell -= n; cell };
    public func mul(n:Int) : async Int { cell *= n; cell };
    public func div(n:Int) : async ?Int {
        if ( n == 0 ) {
        return null // null indicates div-by-zero error
        } else {
        cell /= n; ?cell
        }
    };
    // Clear the calculator and reset to zero
    public func clearall() : async Int {
        if (cell : Int != 0)
        cell -= cell;
        return cell
    };

    public query func getCalculatorResult(): async Int {
        cell;
    };

    // Counter
    public func increment(): async () {
        currentValue += 1;
    };
    // Get Counter val
    public query func getValue(): async Nat {
        currentValue;
    };
    // Get query for hello world
    public query func hello() : async Text {
        return "Hello world from Internet Computer!";
    };
    // Get message for greeting
    public func greet(msg : Text) : async Text {
        return msg;
    };
};
