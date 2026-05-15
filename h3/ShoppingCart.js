// This script handles shopping cart data and calculations.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. Filter: Show only the products that are currently in stock.
let availableItems = cart.filter(item => item.inStock)
console.log("Items currently in stock:", availableItems);

// 2. Map: Create a simplified list showing only item names and their prices.
let itemPriceList = cart.map((item) => ({
  name: item.name,
  totalPrice: item.price
}));
console.log("Item Name and Price list:", itemPriceList);

// 3. Reduce: Calculate the total value of all items in the cart (price * quantity).
let totalCartValue = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)
console.log("Total Cart Value:", totalCartValue)

// 4. Find: Get the full details for the item named "Mouse".
let mouseDetails = cart.find((item) => item.name === 'Mouse')
console.log("Details for 'Mouse':", mouseDetails)

// 5. FindIndex: Find the position of the "Keyboard" in our cart list.
let keyboardPosition = cart.findIndex(item => item.name === 'Keyboard')
console.log("Position of 'Keyboard' in cart:", keyboardPosition)
