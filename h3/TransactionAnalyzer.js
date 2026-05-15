// This script analyzes financial transactions to calculate balances and filter data.

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. Filter: Get a list of only the "credit" (money in) transactions.
let credit = transactions.filter(transact => transact.type === 'credit')
console.log("credit transactions : ", credit)

// 2. Map: Extract just the amounts from each transaction into a simple list.
let transact = transactions.map(transact => transact.amount)
console.log("Only transactions amounts : ", transact)

// 3. Reduce: Calculate the final account balance (Credits add, Debits subtract).
let accBalance = transactions.reduce((acc, transaction) => {
  if (transaction.type === 'credit') {
    return acc + transaction.amount
  }
  else {
    return acc - transaction.amount
  }
}, 0)
console.log("account balance : ", accBalance)

// 4. Find: Identify the first "debit" (money out) transaction that occurred.
let debit = transactions.find(transaction => transaction.type === 'debit')
console.log("first debit transaction : ", debit)

// 5. FindIndex: Find the position of the transaction worth 10,000.
let transactIndex = transactions.findIndex(transaction => transaction.amount === 10000)
console.log("index of transaction 10000 : ", transactIndex)