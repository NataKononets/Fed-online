// Перепишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let message = 'test';
function example() {
    if (true) { 
        let message = 'Hello, world!';
        console.log(message);
    }
}
    console.log(message); 
// Завдання 2.
// Використовуючи for in  виведіть значення з об'єктку в console.log
// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Завдання 3.
// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];
for (let student of students) {
    console.log('Student:');
    for (let key in student) {
        console.log(`  ${key}: ${student[key]}`);
    }  
}