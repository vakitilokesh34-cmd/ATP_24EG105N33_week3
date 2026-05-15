// This file demonstrates how to work with JavaScript Objects.
// Objects are like containers that store related information in key-value pairs.

let person = {
  name: "Ravi",
  age: 25
};

// 1. Adding a new property: We can easily add more details later.
person.city = 'Hyderabad';

// 2. Updating a property: If someone changes their name, we can update it.
person.name = 'Lokesh';

// 3. Deleting a property: If we no longer need a piece of info, we can remove it.
delete person.age;

// Let's see the final state of our object.
console.log("Updated Person Object:", person);