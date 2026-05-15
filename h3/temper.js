// This script processes daily temperature readings.

const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. Filter: Find all the "hot" days where the temperature was above 35.
let hotDays = temperatures.filter(temp => temp > 35)
console.log("Temperatures above 35:", hotDays);

// 2. Map: Convert all the Celsius readings to Fahrenheit.
let fahrenheitTemps = temperatures.map(temp => temp * (9 / 5) + 32)
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);

// 3. Reduce: Calculate the average temperature for the week.
let totalTemp = temperatures.reduce((acc, temp) => acc + temp)
console.log("Average Temperature:", totalTemp / temperatures.length);

// 4. Find: Find the first reading that was above 40 degrees.
let veryHotDay = temperatures.find(temp => temp > 40)
console.log("First temperature found above 40:", veryHotDay);

// 5. FindIndex: Locate the index of the 28-degree reading.
let index28 = temperatures.findIndex(temp => temp === 28)
console.log("Index of the 28-degree reading:", index28);
