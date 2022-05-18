/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');
console.log(navEl);

// const firstNavItemEl = navEl.querySelector('.site-nav__item');

// первый ребенок ul
const firstNavItemEl = navEl.firstElementChild;
console.log('первый ребенок ul: ', firstNavItemEl);

// все дети ul (html-коллекция)
console.log('все дети ul: ', navEl.children);

// получить доступ ко второму элементу ul
console.log('получить доступ ко второму элементу ul: ', navEl.children[1]);

// последний ребенок ul
console.log('последний ребенок ul: ', navEl.lastElementChild);


// Для навігації по цій ієрархії елементи мають наступні властивості.

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

