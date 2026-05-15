 Advanced JavaScript & Data Processing

This project is designed to showcase advanced JavaScript concepts, focusing heavily on **Array Methods**, **Object Manipulation**, and **Module Management**.

---

## Root Directory: Core Concepts

These files serve as the foundation for understanding how JavaScript handles data structures and errors.

| File Name | Purpose | Key Concepts |
| :--- | :--- | :--- |
| `adv.js` | Advanced Array operations. | `map()`, `filter()`, `reduce()`, `find()`, `sort()`. |
| `error.js` | Graceful Error Handling. | `try...catch` blocks, preventing app crashes. |
| `module.js` | Exporting logic. | `export` keyword, sharing data between files. |
| `module1.js` | Importing logic. | `import` keyword, using shared data. |
| `prop.js` | Object Properties. | CRUD (Create, Read, Update, Delete) on objects. |

---

## `h3/` Directory: Practical Applications

The files in the `h3/` folder take the concepts from the root files and apply them to real-world scenarios.

### Financial & Business
- **`EmployeePayroll.js`**: Filters employees by department, calculates 10% bonuses, and sums up the total company payroll.
- **`TransactionAnalyzer.js`**: Analyzes a bank statement. It separates credits from debits and calculates the final net balance.
- **`ShoppingCart.js`**: An e-commerce simulation. It filters for in-stock items, calculates the total cart value (price × quantity), and finds specific items.

### Education & Performance
- **`StudentMarks.js`**: A basic analyzer for a list of scores. It identifies passing marks, adds grace points, and finds the top score.
- **`StudentPerformance.js`**: A more detailed student tracker. It assigns letter grades (A-D) based on scores and calculates the class average.
- **`OnlineCourse.js`**: Manages a list of course names. It filters by length, converts names to uppercase, and formats them into a single display string.

### Media & Environment
- **`MoviePlatform.js`**: Simulates a movie database. It filters by genre (e.g., Sci-Fi), formats titles for display, and averages movie ratings.
- **`temper.js`**: A weather analysis tool. It identifies "hot days" (above 35°C), converts Celsius readings to Fahrenheit, and finds the weekly average temperature.

---

##  How to use this project
Each file is a standalone script that can be run using Node.js. For example:
```bash
node adv.js
node h3/EmployeePayroll.js
```
The console will output the results of the various data transformations and logic implementations.
