// Завдання для Math.min та Math.max:
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
function getMin(a, b) {
    return Math.min(a, b);
}
console.log(getMin(10, 5));
console.log(getMin(-3, -7));
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.
function getMax(a, b) {
    return Math.max(a, b);
}   
console.log(getMax(10, 5));
console.log(getMax(-3, -7));

// Завдання для Math.pow:
// Створіть функцію, яка підносить число до заданого ступеня. Виведіть результат у консоль.
function raiseToPower(base, exponent) {
    const result = Math.pow(base, exponent);
    console.log(`${base} у степені ${exponent} дорівнює ${result}`);
    return result;
}
raiseToPower(2, 3); 
raiseToPower(5, 2);
raiseToPower(7, 0);
raiseToPower(3, 100);



// Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
function roundDown(num) {
    const rounded = Math.floor(num);
    console.log(`Округлення вниз: ${num} до ${rounded}`);
    return rounded;
}   
roundDown(4.7);
roundDown(9.2);
roundDown(-3.5);
roundDown(-7.1);

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.
function roundUp(num) {
    const rounded = Math.ceil(num);
    console.log(`Округлення вгору: ${num} до ${rounded}`);
    return rounded;
}
roundUp(4.2);
roundUp(9.8);
roundUp(-3.1);
roundUp(-7.9);


// Завдання для Date.getYear:
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік. Виведіть результат у консоль.

function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    console.log(`Рік народження для віку ${age} є ${birthYear}`);
    return birthYear;
}
getBirthYear(25);
getBirthYear(40);
getBirthYear(60);   
getBirthYear(18);


// Завдання для Date.toLocaleString:
// Створіть об'єкт Date для поточної дати та часу.
const now = new Date();

// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі. Виведіть результат у консоль.
const formattedDateTime = now.toLocaleString();
console.log(`Поточна дата та час: ${formattedDateTime}`);
console.log(`Поточна дата та час (локалізована): ${now.toLocaleString('uk-UA')}`);
console.log(`Поточна дата та час (локалізована): ${now.toLocaleString('en-GB')}`);
console.log(`Поточна дата та час (локалізована): ${now.toLocaleString('ja-JP')}`);

// Завдання для String.split та toUpperCase:
// Створіть рядок, який містить слова, розділені пробілами.
const text = "Це приклад рядка для розбиття на слова";
console.log("Початковий рядок:", text);
// Використайте метод split, щоб розбити рядок на масив слів.
const words= text.split(" ");
console.log("Масив слів:", words);
// Виведіть отриманий масив у консоль у верхньому регістрі.
const upperCaseWords = words.map(word => word.toUpperCase());
console.log("Слова у верхньому регістрі:", upperCaseWords);
console.log("Слова у верхньому регістрі:", words.map(word => word.toUpperCase()));
