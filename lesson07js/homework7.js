// push:
// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
let myArray = [];
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push('Hello');
myArray.push('World');
console.log(myArray);
// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.
// function addElementToArray(arr, element) {
//     arr.push(element);  
//     return arr;
// }
// let array1 = [1, 2, 3];
// console.log(addElementToArray(array1, 4)); 
// let fruits = ['Apple', 'Banana'];   
// console.log(addElementToArray(fruits, 'Orange'));
const addElementToArray = (arr, element) => {
    arr.push(element);  
    return arr;
}
let array1 = [1, 2, 3];
console.log(addElementToArray(array1, 4)); 
let fruits = ['Apple', 'Banana'];   
console.log(addElementToArray(fruits, 'Orange'));   
// pop:
// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.pop();
console.log(colors);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.
function removeLastElement(arr) {
    arr.pop();  
    return arr;
}   
let animals = ['Dog', 'Cat', 'Elephant'];
console.log(removeLastElement(animals)); 
let numbers = [1, 2, 3, 4, 5];
console.log(removeLastElement(numbers));
// unshift:

// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
let fruits2 = ['Banana', 'Orange'];
fruits2.unshift('Apple');
fruits2.unshift('Mango');
console.log(fruits2);   

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.
// function addElementToStart(arr, element) {
//     arr.unshift(element);  
//     return arr;
// }   
// let veggies = ['Carrot', 'Broccoli'];
// console.log(addElementToStart(veggies, 'Spinach')); 
// let letters = ['B', 'C', 'D'];
// console.log(addElementToStart(letters, 'A'));
const addElementToStart = (arr, element) => {
    arr.unshift(element);  
    return arr;
}   
let veggies = ['Carrot', 'Broccoli'];
console.log(addElementToStart(veggies, 'Spinach')); 
let letters = ['B', 'C', 'D'];
console.log(addElementToStart(letters, 'A'));


// shift:

// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
let animals2 = ['Dog', 'Cat', 'Elephant'];
animals2.shift();
console.log(animals2);
// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
// function removeFirstElement(arr) {
//     arr.shift();  
//     return arr;
// }
// let numbers2 = [1, 2, 3, 4, 5];
// console.log(removeFirstElement(numbers2)); 
// let colors2 = ['Red', 'Green', 'Blue', 'Yellow'];
// console.log(removeFirstElement(colors2));
const removeFirstElement = (arr) => {
    arr.shift();  
    return arr;
}
let numbers2 = [1, 2, 3, 4, 5];
console.log(removeFirstElement(numbers2)); 
let colors2 = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(removeFirstElement(colors2));

// fill:
// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
let numbers3 = new Array(5);
numbers3.fill(0);
console.log(numbers3);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.
// function fillArraySection(arr, value, start, end) {
//     arr.fill(value, start, end);  
//     return arr;
// }   
// let array2 = [1, 2, 3, 4, 5];
// console.log(fillArraySection(array2, 0, 1, 4)); 
// let letters2 = ['A', 'B', 'C', 'D', 'E'];
// console.log(fillArraySection(letters2, 'X', 2, 5));
const fillArraySection2 = (arr, value, start, end) => {
    arr.fill(value, start, end);  
    return arr;
}       
let array2 = [1, 2, 3, 4, 5];
console.log(fillArraySection2(array2, 0, 1, 4)); 
let letters2 = ['A', 'B', 'C', 'D', 'E'];
console.log(fillArraySection2(letters2, 'X', 2, 5));
// splice:
// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
let fruits3 = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
fruits3.splice(1, 2); 
console.log(fruits3);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.
// function removeElements(arr, index, count) {
//     arr.splice(index, count);  
//     return arr;
// }
// let colors3 = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
// console.log(removeElements(colors3, 2, 2)); 
// let numbers4 = [1, 2, 3, 4, 5, 6];
// console.log(removeElements(numbers4, 0, 3));

const removeElements2 = (arr, index, count) => {
    arr.splice(index, count);  
    return arr;
}       
let colors3 = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
console.log(removeElements2(colors3, 2, 2)); 
let numbers4 = [1, 2, 3, 4, 5, 6];
console.log(removeElements2(numbers4, 0, 3));

// reverse:

// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
let letters3 = ['A', 'B', 'C', 'D', 'E'];
letters3.reverse();
console.log(letters3);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.
// function reverseArray(arr) {
//     arr.reverse();  
//     return arr;
// }   
// let numbers5 = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers5)); 
// let fruits4 = ['Apple', 'Banana', 'Orange'];
// console.log(reverseArray(fruits4));

const reverseArray2 = (arr) => {
    arr.reverse();  
    return arr;
}   
let numbers5 = [1, 2, 3, 4, 5];
console.log(reverseArray2(numbers5)); 
let fruits4 = ['Apple', 'Banana', 'Orange'];
console.log(reverseArray2(fruits4));


// concat:
// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
 let arrayA = [1, 2, 3];
 let arrayB = ['a', 'b', 'c'];
 let combinedArray = arrayA.concat(arrayB);
 console.log(combinedArray);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.
    // function combineArrays(arr1, arr2) {
    //     return arr1.concat(arr2);
    // }
    // let nums = [1, 2, 3];
    // let chars = ['x', 'y', 'z'];
    // console.log(combineArrays(nums, chars)); 
    // let veggies2 = ['Carrot', 'Broccoli'];
    // let fruits5 = ['Apple', 'Banana'];
    // console.log(combineArrays(veggies2, fruits5));

    const combineArrays2 = (arr1, arr2) => arr1.concat(arr2);
    let nums2 = [1, 2, 3];
    let chars2 = ['x', 'y', 'z'];       
    console.log(combineArrays2(nums2, chars2));
    let veggies3 = ['Carrot', 'Broccoli'];
    let fruits6 = ['Apple', 'Banana'];
    console.log(combineArrays2(veggies3, fruits6));


// includes:
// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
let colors4 = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(colors4.includes('Green')); 
console.log(colors4.includes('Purple'));    

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.
// function arrayIncludes(arr, element) {
//     return arr.includes(element);
// }   
// let animals3 = ['Dog', 'Cat', 'Elephant'];
// console.log(arrayIncludes(animals3, 'Cat')); 
// console.log(arrayIncludes(animals3, 'Lion')); 
// let numbers6 = [1, 2, 3, 4, 5];
// console.log(arrayIncludes(numbers6, 3)); 
// console.log(arrayIncludes(numbers6, 6));

const arrayIncludes2 = (arr, element) => arr.includes(element);
let animals4 = ['Dog', 'Cat', 'Elephant'];
console.log(arrayIncludes2(animals4, 'Cat'));   
console.log(arrayIncludes2(animals4, 'Lion')); 
let numbers7 = [1, 2, 3, 4, 5];
console.log(arrayIncludes2(numbers7, 3)); 
console.log(arrayIncludes2(numbers7, 6));

// filter:

// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.
 let numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let evenNumbers = numbers8.filter(num => num % 2 === 0);
 console.log(evenNumbers);

// // Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.
// function filterArray(arr, condition) {
//     return arr.filter(condition);
// }   
// let fruits7 = ['Apple', 'Banana', 'Avocado', 'Blueberry', 'Cherry'];
// let aFruits = filterArray(fruits7, fruit => fruit.startsWith('A'));
// console.log(aFruits); 
// let numbers9 = [10, 15, 20, 25, 30];
// let greaterThan20 = filterArray(numbers9, num => num > 20);
// console.log(greaterThan20);
// const filterArray2 = (arr, condition) => arr.filter(condition);
// let fruits8 = ['Apple', 'Banana', 'Avocado', 'Blueberry', 'Cherry'];
// let aFruits2 = filterArray2(fruits8, fruit => fruit.startsWith('A'));   
// console.log(aFruits2); 
// let numbers10 = [10, 15, 20, 25, 30];
// let greaterThan202 = filterArray2(numbers10, num => num > 20);
// console.log(greaterThan202);

const filterArray2 = (arr, condition) => arr.filter(condition);
let fruits8 = ['Apple', 'Banana', 'Avocado', 'Blueberry', 'Cherry'];
let aFruits2 = filterArray2(fruits8, fruit => fruit.startsWith('A'));       
console.log(aFruits2); 
let numbers10 = [10, 15, 20, 25, 30];
let greaterThan202 = filterArray2(numbers10, num => num > 20);
console.log(greaterThan202);

// map:

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
let numbers11 = [1, 2, 3, 4, 5, 10];
let squares = numbers11.map(num => num * num);
console.log(squares);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.
// function mapArray(arr, transform) {
//     return arr.map(transform);
// }        
// let names = ['Alice', 'Bob', 'Charlie'];
// let nameLengths = mapArray(names, name => name.length);
// console.log(nameLengths); 
// let numbers12 = [1, 2, 3, 4, 5];
// let doubled = mapArray(numbers12, num => num * 2);
// console.log(doubled);
const mapArray2 = (arr, transform) => arr.map(transform);
let names2 = ['Alice', 'Bob', 'Charlie'];
let nameLengths2 = mapArray2(names2, name => name.length);      
console.log(nameLengths2); 
let numbers12 = [1, 2, 3, 4, 5];
let doubled2 = mapArray2(numbers12, num => num * 2);
console.log(doubled2);  
