// Строгий режим
"use strict"

// Клонування елементу
// cloneNode - клонує сам об'єкт
// cloneNode(true) - клонує об'єкт з вмістом
/*
const block = document.querySelector('.block');
const blockClone = block.cloneNode();
console.log(blockClone);
*/

// Видалення об'єкту
/*
const block = document.querySelector('.block');
block.remove();
*/

// Стилі та класи
// className classList

// className - перезапис класу
/*
const block = document.querySelector('.block');
block.className = "object";
*/

// classList - метод роботи з класами
// const block = document.querySelector('.block');
/*
// НЕ використовуємо крапку для імені класу
block.classList.add('classname'); - додаємо клас
block.classList.remove('classname'); - видаляємо клас
block.classList.toggle('classname'); - якщо клас є видаляємо якщо немає додаємо
block.classList.contains('classname'); - поверне true якщо клас є
*/

//block.classList.add('active');
/*
if (block.classList.contains('active')) {
	// code
	console.log('Клас є');
}
if (!block.classList.contains('active')) {
	// code
	console.log('Класа немає');
}
*/

// Управління стилями
// style
// const block = document.querySelector('.block');
/*
const totalPadding = 20 + 30;

// Додати властивість
block.style.paddingTop = `${totalPadding}px`;
block.style.paddingBottom = `${totalPadding}px`;

// Прибрати властивість
block.style.paddingTop = ``;
*/
/*
// Перезапис стілів на вказані
block.style.cssText = `
	background-color: #000;
	padding: 10px 30px 10px 80px;
	border: 1px solid #000;
	color: #fff;
`;
// .... code ...
// Змінюємо одину властивість
block.style.color = `#000`;
*/

// Отримання стилю (його значення)
// getComputedStyle
/*
const block = document.querySelector('.block');

const blockStyle = getComputedStyle(block);
const paddingTop = parseInt(blockStyle.paddingTop);
const fontSize = parseInt(blockStyle.fontSize);
console.log(paddingTop);
console.log(fontSize);
*/
/*
// Робота з атрибутами
const block = document.querySelector('.block');
//Перевіряємо наявність атрибута.
block.hasAttribute('name');
//Получаємо значення атрибута.
block.getAttribute('name');
//Установлюємо значення атрибута.
block.setAttribute('name', 'value');
//Удаляємо атрибут.
block.removeAttribute('name');
*/
/*
// DATA атирибути
// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
const speed = +block.dataset.animationSpeed;
console.log(speed);

// Створили атрибут
block.dataset.someAttr = "Text";

// ....

// Отримали данні
const save = block.dataset.someAttr;
console.log(save);

// Перевірка чи є атрибут
console.log(block.hasAttribute('data-some-attr'));
*/

/*
// Корисні властивості
const block = document.querySelector('.block');

// Отримання імені тегу
console.log(block.tagName);

// Атрибут hidden
block.hidden = true;
*/


// Розміри та кординати


// Розміри вікна браузера (з полосами прокрутки)
// об'єкт window
/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
*/

// Розміри вікна браузера (з полосами прокрутки)
// об'єкт body
// clientWidth clientHeight
/*
const mainElement = document.documentElement;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight);
*/

// Кількість прокручений пікселів
// об'єкт window
/*
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

// window.scrollBy (left, top)
// прокрутка відносно поточного положення
/*
window.scrollBy(0, 50);
console.log(window.scrollY);
*/


// window.scrollTo({ options }) прокрутка на вказані кординати
/*
window.scrollTo({
	top: 500,
	let: 0,
	behavior: "smooth"
});
*/

// elem.scrollIntoView();
// Проктурка до об'єкту
/*
const block = document.querySelector('.block');

function scrollToBlock() {
	block.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: "center",
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}*/


// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (позиція CSS-свойства absolute, relative, fixed чи sticky)
// відносно якого рахується кординати
/*
const block = document.querySelector('.block');

console.log(block.offsetParent);

console.log(block.offsetTop);
console.log(block.offsetLeft);
*/

// Загальні розміри елемента
// offsetWidth и offsetHeight
/*
const block = document.querySelector('.block');
console.log(block.offsetWidth);
console.log(block.offsetHeight);
*/

// Кординати відносно вікна браузера
// getBoundingClientRect
/*
const block = document.querySelector('.block');
console.log(block.getBoundingClientRect().top);
console.log(block.getBoundingClientRect().left);
*/

// Отримання об'екта по кординатам
// document.elementFromPoint(x, y);
/*
const elem = document.elementFromPoint(50, 0);
console.log(elem);
*/

/*
// Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/


// Події
// Синтаксис події

// const link = document.querySelector('.link');
// elem/document.addEventListener("ім'я події", func, options)
// elem/document.addEventListener("ім'я події", ()=>{ code }, options);

// Відмінити подію
// removeEventListener

/*
link.addEventListener("click", (event) => {
	console.log('123');
});
link.removeEventListener("click", (event) => {
	console.log('123');
});
*/
/*
const options = {
	"capture": false, // фаза, на якій повинен спрацювати обробник
	"once": true, // якщо істина, тоді обробник буде
	//автоматично удалён після виконання.
	"passive": false // якщо true, то вказує, що обробник
	//ніколи не викликає preventDefault()
}

link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('123');
}
*/

/*
const link = document.querySelector('.link');

// Дія за замовченням
link.addEventListener("click", linkAction);
function linkAction(event) {
	if (link.dataset.google === "false") {
		console.log('123');
		// Відключення дії за замовченням!
		event.preventDefault();
	}
}
*/

// Події для багатьох елементів
/*
const links = document.querySelectorAll('.link');
links.forEach(link => {
	link.addEventListener("click", linkAction);
	function linkAction(event) {
		if (link.dataset.google === "false") {
			console.log('123');
			// Відключення дії за замовченням!
			event.preventDefault();
		}
	}
});
*/
// Делегування події
/*
document.addEventListener("click", action);

function action(event) {
	const targetItem = event.target;
	if (targetItem.closest('.link')) {
		// Потрібний код
		console.log('It`s LINK!');
		event.preventDefault();
	}

	if (targetItem.closest('.button')) {
		// Потрібний код
	}

	if (targetItem.closest('.some-element')) {
		// Потрібний код
	}


	console.log('Click');
}
*/

// Тип події
//console.log(event.type);
// Об'єкт на якому створив обробник
//console.log(event.target);
// Положення курсора по осі X відносно вікна
//console.log(event.clientX);
// Положення курсора по осі Y відносно вікна
//console.log(event.clientY);

// Положення курсора по осі X відносно документу
//console.log(event.pageX);
// Положення курсора по осі Y відносно документу
//console.log(event.pageY);

// Усі деталі події
//console.log(event);

// Основні події миші
/*
click, mouseenter, mouseleave
*/

// mouseenter - наведення миші
// mouseleave - переведення миші
// mousemove - рух миші

/*
const mouseBlock = document.querySelector('.mouse');

mouseBlock.addEventListener("mouseenter", mouseAction);
mouseBlock.addEventListener("mouseleave", mouseAction);
mouseBlock.addEventListener("mousemove", mouseAction);

const ball = document.querySelector('.mouse__ball');

function mouseAction(event) {
	if (event.type === "mouseenter") {
		// При наведенні
		console.log(event.pageY);
	}
	if (event.type === "mouseleave") {
		// При переведенні
		console.log(event.pageY);
	}
	if (event.type === "mousemove") {
		ball.style.cssText = `
			left: ${event.pageX}px;
			top: ${event.pageY}px;
		`;
	}
}
*/

// Scroll
/*
window.addEventListener("scroll", wScroll);

const mouseBlock = document.querySelector('.mouse');

function wScroll(e) {
	//console.log(scrollY);
	console.log(mouseBlock.getBoundingClientRect().top);
}
*/

// Завантаження

/*
браузер повністю завантажив HTML, 
було побудовано DOM-дерево, але зовнішні ресурси, 
такі як картинки <img> і стилі, 
можуть бути ще не завантажені.
*/
window.addEventListener("DOMContentLoaded ", domLoaded);
function domLoaded(e) {

}
/*
браузер завантажив HTML і зовнішні ресурси 
(картини, стилі і т.д.).
*/
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');
}

