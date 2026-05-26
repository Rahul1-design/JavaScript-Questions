// Optional chaining helps to prevent the crash.
//for example:-
//if(user?.job?.title) ==> if the user has data then continue if not then return dont give any error

// Nullish Coalescing =>  means ??

// ?? returns right side ONLY if left is null or undefined
0 ?? "default"; // 0 — 0 is not null/undefined
"" ?? "default"; // "" — empty string is not null/undefined

// * ||
// || returns right side if left is ANY falsy value
// falsy = null, undefined, 0, "", false, NaN
0 || "default"; // "default" — 0 is falsy
"" || "default"; // "default" — empty string is falsy

// ** && — if left is truthy, return right. If left is falsy, return left.
true && "hello"; // "hello"
false && "hello"; // false
null && "hello"; // null

const salary = 0; // job is free/volunteer

// Bug — shows "Not specified" even though salary is intentionally 0
const display = salary || "Not specified"; // "Not specified" ❌

// Correct
const display = salary ?? "Not specified"; // 0 ✅
