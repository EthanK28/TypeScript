//// [iterableArrayPattern27.ts]
function takeFirstTwoEntries(...[[k1, v1], [k2, v2]]: [string, number][]) { }
takeFirstTwoEntries(...new Map([["", 0], ["hello", 1]]));

//// [iterableArrayPattern27.js]
function takeFirstTwoEntries(...[[k1, v1], [k2, v2]]) {
}
takeFirstTwoEntries(...new Map([
    [
        "",
        0
    ],
    [
        "hello",
        1
    ]
]));
