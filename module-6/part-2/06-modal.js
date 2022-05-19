/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);



function onOpenModal() {
    // повесил слушателя при открытии модалки
    window.addEventListener('keydown', onEscKeyPress);

    document.body.classList.add('show-modal');
}

function onCloseModal() {
    // убрать слушателя при закрытии модалки
    window.removeEventListener('keydown', onEscKeyPress)

    document.body.classList.remove('show-modal');
}

function onBackDropClick(event) {
    // текущий элимент - это где висит addEventListener
    console.log(event.currentTarget);

    // это куда мы в интерфейсе жмакнули
    console.log(event.target);

    if (event.currentTarget === event.target) {
        console.log('Кликнули в бекдроп')
        onCloseModal();
    }
}

// закрыть модалку по Esc -> слушатель на onOpenModal, убирает onCloseModal
function onEscKeyPress(event) {
    console.log(event);
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}


// всплытие на верх:
// div.backdrop      ------------------  ловим тут слушатель событий
// div.modal             ----------
//    p                    ----- происходит тут

//                           Мы