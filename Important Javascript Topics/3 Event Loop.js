// Topic 3 — The Event Loop (very commonly asked)
// JavaScript is single-threaded — it can only do one thing at a time. But it handles async things like setTimeout and API calls without freezing. How?
// The mental model
// Think of it as three things:

// Call Stack — where your code actually runs, one at a time
// Web APIs — browser handles timers, fetch, etc. outside the stack
// Callback Queue — finished async callbacks wait here to be picked up

// The Event Loop constantly checks: is the call stack empty? If yes, push the next callback from the queue.

// in there it checks the call stack first and finish it executing after the callstack is empty it checks the callback queue and push it
console.log(10);

setTimeout(() => {
  console.log(20);
}, 0);

console.log(30);

// microtask vs macrotask

console.log(1);

setTimeout(() => {
  console.log(2); //macrotask
}, 0);

Promise.resolve().then(() => console.log(3)); //microtask

console.log(4);
