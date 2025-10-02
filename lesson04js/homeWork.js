// 1) Порівняння трьох чисел
const n1 = Number(prompt("1) Введіть перше число"));
const n2 = Number(prompt("1) Введіть друге число"));
const n3 = Number(prompt("1) Введіть третє число"));

if (Number.isNaN(n1)||Number.isNaN(n2)||Number.isNaN(n3)) {
  console.log('1) Помилка: введено не число');
} else {
  const max = Math.max(n1, n2, n3);
  const countMax = [n1, n2, n3]
  .filter(v => v === max).length;
  if (countMax > 1) {
    console.log('1) Найбільше число: ${max}, таких чисел: ${countMax}');
  } else {
    console.log('1) Найбільше число: ${max}');
  }
}

// 2) Визначення сезону
const month = Number(prompt("2) Введіть номер місяця (1–12)"));
if (Number.isNaN(month)||month < 1||month > 12||!Number.isInteger(month)) {
  console.log("2) Помилка: введено не коректний номер місяця");
} else if (month === 12||month === 1||month === 2) {
  console.log("2) Зима");
} else if (month >= 3 && month <= 5) {
  console.log("2) Весна");
} else if (month >= 6 && month <= 8) {
  console.log("2) Літо");
} else {
  console.log("2) Осінь");
}

// 3) Знак числа
const number = Number(prompt("3) Введіть число"));
if (Number.isNaN(number)) {
  console.log("3) Помилка: введено не число");
} else {
  const result = number > 0 ? "3) Додатнє число"
               : number < 0 ? "3) Від'ємне число"
                            : "3) Нуль";
  console.log(result);
}

// 4) Тип кута (тернарний оператор)
const angle = Number(prompt("4) Введіть величину кута в градусах"));
if (Number.isNaN(angle)||angle < 0) {
  console.log("4) Помилка: введено не число або від’ємний кут");
} else {
  const angleType = angle === 90 ? "4) Прямий кут"
                   : angle  < 90 ? "4) Гострий кут"
                                 : "4) Тупий кут";
  console.log(angleType);
}

// 5) Оцінка студента + інкремент
let score = Number(prompt("5) Введіть свою оцінку за тест (0–100)"));
if (Number.isNaN(score)||score < 0||score > 100) {
  console.log("5) Помилка: введено не коректну оцінку");
} else {
  const toLetter = s => s >= 90 ? "A"
                    : s >= 80 ? "B"
                    : s >= 70 ? "C"
                    : s >= 60 ? "D" : "F";

  const initialGrade = toLetter(score);
  score++; 
  const finalGrade = toLetter(score);
  const isPassed = score >= 60 ? "зарахований" : "не зарахований";

  console.log('5) Початкова оцінка: ${initialGrade}, Оцінка після інкремента: ${finalGrade}, Студент — ${isPassed}');
}