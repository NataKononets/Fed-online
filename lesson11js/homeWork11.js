// Тема: Spread Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.
const a=[1,2,3];
const b=[4,5,6];
const merged=[...a,...b];
console.log('єдынаний масив:',merged);
// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.
function showStringAndRest(firstString,...restArgs){
    console.log('Рядок:',firstString);
    console.log('Масив решти аргументів:',restArgs);
}
showStringAndRest('Привіт','10','true','аbanana',42);
// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.
function average(...numbers){
    if(numbers.length===0){
        console.log('Помилка: не введено жодного числа');
        return NaN;
    }
    const sum=numbers.reduce((acc,num)=>acc+num,0);
    const avg=sum/numbers.length;
    return avg;
}   
average(10);
average(1,2,3,4,5 );
average();
average(5,15,25);
console.log('Середнє значення:',average(10,20,30,40,50));


// Тема: TypeOf

// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.
function reportType(value){
    const t=typeof value;
    console.log('Тип значення:${t}',value);
}
reportType(42);
reportType('Hello');
reportType(true);
reportType({name:'Alice'});
reportType([1,2,3]);
reportType(undefined);
reportType(null); 
reportType({x:10,y:20});
reportType(function(){return 'test';});
reportType(Symbol('id'));

// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof. 
function checkType(value){
    if(typeof value==='number'){
        console.log('Це число:');
    }
    else if(typeof value==='string'){
        console.log('Це рядок:');
    }  
    else{
        console.log('Це інший тип:');
    }   
}
checkType(100);
checkType('JavaScript');
checkType(true);    
checkType({a:1});
checkType([1,2,3]);
checkType(undefined);
checkType(null);