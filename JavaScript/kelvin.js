// This is a constant variable for the value of kelvin today
const kelvin = 293;
// This is a variable for the value of celsius today
let celsius = kelvin - 273;
// This is a variable for the value of fahrenheit today
let fahrenheit = celsius * (9 / 5) + 32;
// rounding down to nearest whole number
Math.floor(fahrenheit);
// displaying the value of Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);