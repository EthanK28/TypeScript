//// [objectBindingPatternKeywordIdentifiers04.ts]

var { "while": while } = { while: 1 }

//// [objectBindingPatternKeywordIdentifiers04.js]
var _a = { while: 1 },  = _a["while"], while = _a.while;
