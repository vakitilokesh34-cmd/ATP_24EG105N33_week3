// This file explores advanced JavaScript array operations. 
// These methods allow us to manipulate and analyze data without changing the original array structure in most cases.

// A callback function is just a function that we pass into another function as an argument.
// Think of it as telling the array: "Hey, for every item you have, run this specific piece of logic."

// We'll use this sample data for our tests:
let testData = [90, 45, -12, 65, 100];

// 1. FILTERing: Think of this like a sieve or a selection process.
// It creates a new array containing only the items that pass a specific test.

// Here, we only keep numbers greater than 30.
let r = testData.filter((element) => element > 30);
console.log("Filtered (>30):", r);

// We can also combine conditions, like finding numbers between 40 and 80.
let r1 = testData.filter((element) => element > 40 && element < 80);
console.log("Filtered (40-80):", r1);

// 2. MAPping: This is for modification.
// It takes every item in the array, changes it based on our logic, and returns a new array.

// For example, let's add 10 to every single number.
let r2 = testData.map(element => element + 10)
console.log("Mapped (+10):", r2);

// We can also have more complex logic inside map.
let r3 = testData.map((element) => {
  if (element > 50) {
    return element - 20; // If it's a big number, shrink it.
  } else {
    return element + 10; // If it's small, boost it.
  }
})
console.log("Complex Map logic:", r3);

// 3. REDUCE: This "boils down" the entire array into a single value.
// It uses an 'accumulator' to keep track of the result as it moves through the items.

// Finding the sum of all elements:
let r4 = testData.reduce((accumulator, element) => accumulator + element)
// It works like this: 90 + 45 = 135 -> 135 + (-12) = 123... and so on.
console.log("Total Sum (Reduce):", r4);

// We can also use reduce to find the smallest number:
let r5 = testData.reduce((accumulator, element) => {
  if (accumulator > element) {
    accumulator = element;
  }
  return accumulator;
})
console.log("Smallest Number (Reduce):", r5)

// Or find the largest number:
let r6 = testData.reduce((accumulator, element) => {
  if (accumulator < element) {
    accumulator = element;
  }
  return accumulator;
})
console.log("Largest Number (Reduce):", r6)

// 4. FIND: This looks through the array and returns the FIRST item that matches our condition.
let r7 = testData.find((element) => element === 90);
console.log("Found item (90):", r7);

// 5. FINDINDEX: Similar to find, but instead of the item, it tells us WHERE it is (the position).
let r8 = testData.findIndex((element) => element === 73); // If not found, it returns -1.
console.log("Index of 73:", r8);

// 6. SORTING: Organizing our data.
let data = [9, 10, 8, 4]
// Sort in ascending order (small to large).
console.log("Sorted (Asc):", data.sort((a, b) => a - b));

// toSorted() is a newer method that returns a sorted copy without changing the original array.
console.log("toSorted Copy:", data.toSorted((a, b) => a - b))

// Sort in descending order (large to small).
console.log("Sorted (Desc):", data.sort((a, b) => b - a))

// 7. REVERSE: Simply flips the order of the array.
console.log("Reversed Array:", data.reverse());

