const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */


const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
// add - добавить классы
navEl.classList.add('super-cool', 'qwerty');

// remove - удалить классы
navEl.classList.remove('qwerty');

// replace - старый класс заменить на новый
navEl.classList.replace('site-nav', 'site-menu');

// toggle переключение -> есть снимет, нет добавит
magicBtn.addEventListener('click', () => {
    navEl.classList.toggle('qwerty');
});

// contains - а есть ли этот класс на элементе?
console.log(navEl.classList.contains('site-nav'));

const currentPageUrl = '/about';

// ищем элимент с href="/portfolio"
const linkEL = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
console.log(linkEL);

linkEL.classList.add('site-nav__link--current');