// OUTPUT:
// Starting
// Stopping
// 0 Second Timer
// 2 Second Timer

console.log("Starting");

setTimeout(() => {
  console.log("2 Second Timer");
}, 2000);

setTimeout(() => {
  console.log("0 Second Timer");
}, 0);

console.log("Stopping");

// Call stack - track the call of execution of the program 
//               - Data structure like from top add/remove


// Call stack -> single threaded
    // console.log('2 Second Timer); -> pop 12
    // Callback(2 sec) -> pop 13
    // console.log('0 Second Timer); -> pop 8
    // Callback(0 sec) -> pop 9
    // console.log('Finishing up); -> pop 5
    // setTimeout(..., 0) -> pop 3
    // setTimeout(..., 2000) -> pop 2
    // console.log('Starting); -> pop 1
    // main() -> pop 6

// Node APIs -> multi threaded(on-blocking nature)
    // setTimeout(2 sec) -> pop 10
    // setTimeout(0 sec) -> pop 4


// Event Loop
// Callback Queue - maintain list of callback functions to be execute
// wait for call stack to be empty before execution
    // Callback (0 sec) -> pop 7
    // Callback (2 sec) -> pop 11