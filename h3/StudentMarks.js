// This script processes student marks to analyze performance.

const marks = [78, 92, 35, 88, 40, 67]

// 1. Filter: Find all marks that are 40 or higher (Passing marks).
let passingMarks = marks.filter(mark => mark >= 40)
console.log("List of passing marks:", passingMarks)

// 2. Map: Give every student a 5-mark boost (Grace marks).
let graceMarks = marks.map(mark => mark + 5)
console.log("Marks after 5-point grace boost:", graceMarks)

// 3. Reduce: Find the highest score achieved in the class.
let highestMark = marks.reduce((acc, mark) => {
  if (acc < mark) {
    acc = mark
  }
  return acc;
})
console.log("The highest mark is:", highestMark)

// 4. Find: Identify the first student who scored below 40.
let firstFail = marks.find(mark => mark < 40)
console.log("First mark found below 40:", firstFail)

// 5. FindIndex: Find the position of the score 92 in the list.
let indexOf92 = marks.findIndex(mark => mark === 92)
console.log("Position of the 92 score:", indexOf92)