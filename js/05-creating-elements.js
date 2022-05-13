/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */


const titleEl = document.createElement('h1');
// console.log(titleEl);
titleEl.classList.add('page-title');
titleEl.textContent = 'Йобана срака';

// присоиденить ребёнка body в конец
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
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// для вставки больше 1-го элимента
heroEl.append(titleEl, imageEl);
console.log(heroEl);
/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
// console.log(navItemEl);

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

// console.log(navLinkEl);

// li => в котором вложен => a
navItemEl.appendChild(navLinkEl);

const navEl = document.querySelector('.site-nav');

navEl.appendChild(navItemEl);

// вставить любое место
navEl.insertBefore(navItemEl, navEl.firstElementChild);

