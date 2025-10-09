// 1. Створення класу та об'єкта: Створіть клас Person з властивостями name та age.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello(){
  console.log(`Hello, my name is ${this.name}.`);
}
}
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
const Person1 = new Person("John", 30);
console.log(Person1.name);
console.log(Person1.age);
// 2. Методи класу:

// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

const Person2 = new Person("Alice", 25);
Person2.sayHello(); 


// 3. Наслідування:

// Створіть клас Student, який наслідує від класу Person.// Додайте властивість studentId до класу Student.// Додайте метод study, який виводить повідомлення про вивчення студентом.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
    study() {
    console.log(`${this.name} is studying.`);
    }
}
const Student1 = new Student("Bob", 20, "S12345");
Student1.sayHello();
Student1.study();
console.log(Student1.studentId);


