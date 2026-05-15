// This script manages a list of available online courses.

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. Filter: Find courses that have a name longer than 5 characters.
let longNamedCourses = courses.filter(course => course.length > 5)
console.log("Courses with more than 5 letters:", longNamedCourses);

// 2. Map: Convert all course names to Uppercase for consistent display.
let upperCaseCourses = courses.map(course => course.toUpperCase())
console.log("Courses in Uppercase:", upperCaseCourses)

// 3. Reduce: Combine all course names into one single capitalized string separated by bars.
let allCoursesString = courses.reduce((acc, course) => (acc + " | " + course).toUpperCase())
console.log("All courses in one string:", allCoursesString)

// 4. Find: Search specifically for the "react" course.
let reactCourse = courses.find(course => course === "react")
console.log("Found Course:", reactCourse)

// 5. FindIndex: Find where "node" is located in our course list.
let nodeIndex = courses.findIndex(course => course === "node")
console.log("Index of 'node' course:", nodeIndex);