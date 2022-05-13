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
// добавить классы
navEl.classList.add('super-cool', 'qweqwewq');

// удалить классы
navEl.classList.remove('qweqwewq', 'super-cool');

// старый класс заменить на новый
navEl.classList.replace('site-nav', 'site-menu');

// а есть ли этот класс?
console.log(navEl.classList.contains('site-menu'));

// есть снимет, нет добавит
magicBtn.addEventListener('click', () => {
    navEl.classList.toggle('qweqwewq');
});

const currentPageUrl = '/portfolio';

const linkEL = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
console.log(linkEL);

linkEL.classList.add('site-nav__link--current');