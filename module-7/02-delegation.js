/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector('.js-container');

// ловим события клика по кнопкам в контейнере
container.addEventListener('click', onClick);

function onClick(evt) {
// 1. evt.target - на каком элементе произошел клик
// 2. если evt.target.nodeName не равно 'BUTTON' то выхожу из этой ф-ции
  if (evt.target.nodeName !== 'BUTTON') {
    return;
    }
// теги заглавными буквами
    // console.log(evt.target.nodeName);

  console.log(evt.target.textContent);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}


// Тепер є тільки один обробник події кліку і браузеру не потрібно зберігати у пам'яті сто різних слухачів. Тобто делегування зводиться до трьох простих кроків.

// 1. Визначити спільного предка групи елементів для відстеження подій.
// 2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
// 3. В обробнику використовувати event.target для вибору цільового елемента.