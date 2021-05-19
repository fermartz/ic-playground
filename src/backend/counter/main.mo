actor {
    stable var currentValue: Nat = 0;

    public func increment(): async () {
        currentValue += 1;
    };

    public query func getValue(): async Nat {
        currentValue;
    };

    public query func hello() : async Text {
        return "Hello there Fernando!";
    };
    public func greet(msg : Text) : async Text {
        return "Hello, " # msg # "!";
    };
};
