import { add, subtract, multiply, divide } from "./math.js";
console.log("Addition: ", add(10, 5)); // 15
console.log("Subtraction: ", subtract(10, 5));
console.log("Multiplication: ", multiply(10, 5));
console.log("Division: ", divide(10, 5));
console.log("Division by zero test: ");

import { toUpperCaseString, reverseString } from "./math5.js";

console.log("=== String Utilities ===");
console.log("Uppercase:", toUpperCaseString("hello nata"));
console.log("Reversed:", reverseString("frontend"));

console.log("=== Math Operations ===");
console.log("Add:", add(8, 2));
console.log("Subtract:", subtract(8, 2));
