/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// 'keydown' - реагирует на любое событие нажатия клавиш
// 'keypress' - реагирует на нажате по символах

// вешаем слушателя события addEventListener на window
window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {

    console.log('event.key: ', event.key);
    console.log('event.code: ', event.code);

    refs.output.textContent += event.key;
}

function onClearOutput() {
  // очистить строку
    refs.output.textContent = '';
}