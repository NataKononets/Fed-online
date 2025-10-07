// 1. Калькулятор  Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї математичної операції з 2 цифровими значеннями
const op = prompt("Введіть знак математичної операції (+, -, /, *)");
const x = Number(prompt("Введіть перше число"));
const y = Number(prompt("Введіть друге число"));
try {
    alert(result = calculate(op, x, y));
} catch (e) {
    alert(e.message);
}
function add(a, b) {
    return a + b;
}   
function subtract(a, b) {
    return a - b;
}   
function multiply(a, b) {
    return a * b;
}
function divide(a, b) { 
    if (b === 0) {
        throw new Error("Помилка: ділення на нуль");
    }   
    return a / b;
}
function calculate(operation, a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error("Помилка: введено не число");
    }   
    switch (operation) {
        case "+":
            return add(a, b);   
        case "-":
            return subtract(a, b);
        case "*":   
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("Помилка: невідома операція");
    }   
}
// 2. Параметри та колбеки: Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.
// function hiUser(user) {
//     console .log(`Вітаю ${user}`);
// }
// function wellcomUser(usersArray, callback) {
//     if ( typeof callback !== "function") {
//         throw new Error("Помилка: другий параметр має бути функцією");
//     }   
//     for (const user of usersArray) {
//         callback(user);
//     }
// }
// const users = ["Іван", "Марія", "Петро", "Наталя"];
// wellcomUser(users, hiUser);


// 3. Стрілкові функції Перепишіть попередню функцію в стрілкову

const hiUser=(user) => console .log(`Вітаю ${user}`);

const wellcomUser=(usersArray, callback) => {
    usersArray.forEach(user => callback (user));
}
const users = ["Іван", "Марія", "Петро", "Наталя"];
wellcomUser(users, hiUser);
// 4. Параметри за замовчуванням: Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.
function greet(name = "Гість") {
    console.log(`Привіт, ${name}!`);
}   
greet(); // Виклик без аргументів, використовує значення за замовчуванням
greet("Natalia"); // Виклик з аргументом, використовує передане значення

// 5. Задача з колбеком:

// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення
function printText(text) {
    console.log(`Виведений текст: ${text}`);
}
function processString(str, callback) {
    if (typeof callback !== "function") {
        throw new Error("Помилка: другий параметр має бути функцією");
    }
    callback(str);
}
processString("Привіт,Ната", printText);


// 6. Перепишіть стрілкову функцію в звичайну 

// const multiplyValues = (a, b, c) => a * b * c;
function multiplyValues(a, b, c) {
    return a * b * c;
}   
