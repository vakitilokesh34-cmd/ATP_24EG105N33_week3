// This script handles a simple employee payroll system using array methods.

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. Filter: Find all employees who work in the IT department.
let ItDepart = employees.filter((employee => employee.department === 'IT'))
console.log("Employees from IT department:", ItDepart)

// 2. Find: Search for an employee who earns exactly 30,000.
let salary1 = employees.find(employee => employee.salary === 30000)
console.log("Employee with salary 30000:", salary1)

// 3. Map: Calculate a 10% bonus for everyone and show the new net salaries.
let salary = employees.map((employee) => {
  return { salary: employee.salary + 0.1 * employee.salary }
})
console.log("Net Salary of employees (including 10% bonus):", salary)

// 4. Reduce: Calculate the total amount of money the company pays in salaries.
let totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0)
console.log("Total salary payout for the company:", totalSalary)

// 5. FindIndex: Locate where 'Neha' is in our list.
let emp = employees.findIndex(employee => employee.name === 'Neha')
console.log("Index of Neha in the list:", emp)
