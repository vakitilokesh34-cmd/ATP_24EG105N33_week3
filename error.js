// This file demonstrates how to handle errors in JavaScript.
// Errors happen when something goes wrong in the code (like trying to use a variable that doesn't exist).

// To handle these gracefully without crashing the whole program, we use 'try...catch'.

console.log("Starting the program...");

try {
  // We "try" to run this code.
  // In this case, 'e' is not defined, so it would normally crash the program.
  console.log(e); 
} catch (error) {
  // If an error happens in the 'try' block, the code here runs instead.
  // We can choose to log the error or just ignore it to keep the program running.
  console.log("Oops! Something went wrong, but we caught it.");
}

console.log("The program continues to run smoothly...");
console.log("End of program.");