// Строгий режим
"use strict"


//==========================================================
// Function ==========================================================
//==========================================================

//Taske 1_____________________________________
//Хто попаде перший в консоль Вася чи Коля?
/*
function showName() {
	console.log('Вася');
}
setTimeout(showName, 0);
console.log('Коля');
//Коля попаде перший в консоль, функція showName() має затримку setTimeout
//параметр затримки хоч і вказаний 0, але вона всерівно є
*/

//Taske 2_____________________________________
//Чи вірно визвана функція?
/*
showMessage();
function showMessage() {
	console.log('Message');
}
//Функція визвана вірно, функцію об'явлено за допомогою Function Declaration
*/

//Taske 3_____________________________________
//Чи вірно визвана функція?
/*
showMessageTwo();
let showMessageTwo = function() {
	console.log('Message two');
}
//Функція визвана не вірно, функція об'явлено за допомогою Function Expression
//Її можна викликати лише після об'явлення
*/

//Вірний виклик функції
//showMessageTwo();

//Taske 4_____________________________________
//Як вирішити проблему?
/*
"use strict"
if (2 > 1) {
	function showMessage() {
	console.log('Message');
}
}
showMessage(); // Error: showMessage is not defined
*/

//Рішення проблеми
/*
"use strict"
let showMessage;
if (2 > 1) {
	showMessage = function() {
	console.log('Message');
}
}
showMessage();
*/


//==========================================================
// Array ==========================================================
//==========================================================

//Taske 1_____________________________________
//Яке число (довжину) ми отримаємо?
/*
let arr =['Ваня', 'Іштван','Оля',];
let newArr = arr;
newArr.push('Петро');
console.log(arr.length);
*/
//В результаті довжина масиву arr буде 4

//Taske 2_____________________________________
/*
1) Створіть масив users з елементами 'Ваня' та 'Іштван'.
2) Добавте 'Оля' в кінець.
3) Замініть значення 'Іштван' на 'Петро'.
4) Ваш код для пошуку значення має працювати для 
  масивів з будь-якою довжиною.
5) Удаліть перший елемент масиву і покажіть його.
6) Вставте 'Маша' і 'Паша' в початок масиву.
*/
// 1
let users = ['Ваня', 'Іштван',]; 
console.log(users);

// 2
users.push('Оля'); 
console.log(users);

// 3
users[1] = 'Петро'; 
console.log(users);

// 4
console.log(users.includes('Петро')); 
let user;
for (let i = 0; i < users.length; ++i) {
	user = users[i];
	if (user === 'Оля') {
		console.log(users[i]);
	} else {
		console.log('User not found');
	}
};

users.forEach(user => {
	if (user === 'Ваня') {
		console.log(user);
	} else {
		console.log('User not found');
	}
});

// 5
let firstElement = users.splice(0, 1); 
console.log(firstElement);
console.log(users);

// 6
users.unshift('Маша', 'Паша'); 
console.log(users);

//Taske 3_____________________________________
/*
//Видаліть елемент 'Іштван' і поверніть його в змінну
let arr = ['Ваня', 'Іштван', 'Оля',];
let element = arr.splice(1, 1);
console.log(element);
*/

//Taske 4_____________________________________
/*
//Зробіть з рядка масив
let str = 'Ваня,Іштван,Оля';
let array = str.split(",");
console.log(array);
*/

//Taske 5_____________________________________
//Чому рівен previousValue в початку методу?
/*
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
}); 
//Консоль видасть помилку змінна arrTwo не об'явлена
*/
/*
let arr = [9, 2, 8,];
let reduceValue = arr.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
}); 
//Вірний запис, previousValue буде рівен 9, так як другий аргумент не вказаний
*/


//==========================================================
// DOM ==========================================================
//==========================================================

//Taske 1_____________________________________
//Отримати в змінну елемент з атрибутом data-say-hi
//отримати значення цього атрибуту 
//let sayHi = document.querySelector('[data-say-hi]');
//console.log(sayHi.dataset.sayHi);

//Taske 2_____________________________________
//Отримати в змінну елемент з текстом Йончі
//let list = document.querySelector('ul');
//let listItem = list.lastElementChild;
//console.log(list);
//console.log(listItem);
//console.log(listItem.textContent);



//Taske 3_____________________________________
//Добавити в змінну колекцію елементів з класом like	
//let likeItems = document.querySelectorAll('.like');
//console.log(likeItems);

//Taske 4_____________________________________
//Куди добавиться <li>Текст</li> ?
/*
const list = document.querySelectorAll('ol');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
);
//Буде помилка в консолі, метод document.querySelectorAll не спрацює
//для вирішення задачі потрібно використовувати метод document.querySelector
*/
//const list = document.querySelector('ol');
//list.insertAdjacentHTML(
// 'beforeend',
// '<li>Текст</li>'
//);
//<li>Текст</li> добавиться останнім елементом в list


//==========================================================
// Scroll, Size, Coordinates ===================================
//==========================================================

//Taske 1_____________________________________
//Дізнатись ширину полоси прокрутки
const mainDocument = document.documentElement;
const mainDocumentWidth = mainDocument.clientWidth;
console.log(mainDocumentWidth);

//Taske 2_____________________________________
//Заставте браузер прокрутитись на 1000px зверху
//через 1 секунду після відкриття сторінки
function setScrollTo() {
	window.scrollTo({
		top: 1000,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(setScrollTo, 1000);

//Taske 3_____________________________________

//Отримайте координати будь-яких трьох елементів на сторінці
const itemFirst = document.querySelector('.home-work__item--1');
const itemSecond = document.querySelector('.home-work__item--2');
const itemThird = document.querySelector('.home-work__item--3');

const itemFirstLeftCoord = itemFirst.getBoundingClientRect().left;
const itemFirstTopCoord = itemFirst.getBoundingClientRect().top;
console.log(`Елемент 1 розташований за координатами top: ${itemFirstTopCoord}, left: ${itemFirstLeftCoord}`);

const itemSecondRightCoord = itemSecond.getBoundingClientRect().right;
const itemSecondBottomCoord = itemSecond.getBoundingClientRect().bottom;
console.log(`Елемент 2 розташований за координатами bottom: ${itemSecondBottomCoord}, right: ${itemSecondRightCoord}`);

const itemThirdLeftCoord = itemThird.getBoundingClientRect().left;
const itemThirdTopCoord = itemThird.getBoundingClientRect().top;
console.log(`Елемент 3 розташований за координатами top: ${itemThirdTopCoord}, left: ${itemThirdLeftCoord}`);
