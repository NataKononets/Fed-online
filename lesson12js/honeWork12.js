const header=document.getElementById('main-header');
console.log('getElementById',header);

const sections=document.getElementsByClassName('conten-section');
console.log('getElementsByClassName',sections);

const divs=document.getElementsByTagName('div');
console.log('getElementsByTagName',divs);

const firstli=document.querySelector('ul li:first-child');
console.log('Перший елемент:',firstli.textContent);

const allLis=document.querySelectorAll('ul li');
console.log('Всі елементи li:',allLis);

const liArray=Array.from(allLis);
console.log('Масив li:',liArray);

let listItems=document.querySelectorAll('ul.nav > li');
console.log('ul.nav > li',listItems);

let listItem=document.querySelectorAll('li:nth-child(2)');
console.log('li:nth-child(2)',listItem);