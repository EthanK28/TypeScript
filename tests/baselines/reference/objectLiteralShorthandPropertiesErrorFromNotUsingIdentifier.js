//// [objectLiteralShorthandPropertiesErrorFromNotUsingIdentifier.ts]
// errors
var y = {
    "stringLiteral",
    42,
    get e,
    set f,
    this,
    super,
    var,
    class,
    typeof
};

var x = {
    a.b,
    a["ss"],
    a[1],
};

var v = { class };  // error

//// [objectLiteralShorthandPropertiesErrorFromNotUsingIdentifier.js]
// errors
var y = {
    "stringLiteral": ,
    42: ,
    get e() { },
    set f() { },
    this: this,
    super: super,
    var: var,
    class: class,
    typeof: typeof
};
var x = {
    a: .b,
    a: ["ss"],
    a: [1]
};
var v = { class: class }; // error
