/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */

// создать в памяти тег <h1>
const titleEl = document.createElement('h1');

// добавить класс на <h1>
titleEl.classList.add('page-title');

// добавить текст
titleEl.textContent = 'Йобана срака';

// присоиденить ребёнка к body в конец
// document.body.appendChild(titleEl);

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img');
// console.log(imageEl);

imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'горы';
imageEl.width = 320;

document.body.appendChild(imageEl);


const heroEl = document.querySelector('.hero');

// appendChild - для вставки одного элимента
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// append - для вставки больше 1-го элимента
heroEl.append(titleEl, imageEl);
console.log(heroEl);

/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

// li => в котором вложен => a
navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

// в ul -> вставить последним элементом li
// navEl.appendChild(navItemEl);

// li вставь перед первым элементом ul>li
// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// li вставь перед вторым элементом ul>li
navEl.insertBefore(navItemEl, navEl.children[1]);

