// This script analyzes student performance and assigns grades.

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. Filter: Get a list of students who passed (40 or more marks).
let passingStudents = students.filter(student => student.marks >= 40)
console.log("Students who passed:", passingStudents)

// 2. Map: Assign letter grades based on their numerical scores.
let gradesList = students.map(student => {
  if (student.marks >= 90) return 'A';
  if (student.marks >= 75) return 'B';
  if (student.marks >= 60) return 'C';
  return 'D';
})
console.log("Assigned Grades (A-D):", gradesList)

// 3. Reduce: Calculate the average score for the entire group.
let totalMarks = students.reduce((acc, student) => acc + student.marks, 0)
console.log("Average Class Marks:", totalMarks / students.length)

// 4. Find: Search for the student who scored exactly 92.
let topper = students.find(student => student.marks === 92)
console.log("Student with score 92:", topper)

// 5. FindIndex: Find where 'Kiran' is in the student list.
let kiranIndex = students.findIndex(student => student.name === 'Kiran')
console.log("Index of Kiran in the list:", kiranIndex)