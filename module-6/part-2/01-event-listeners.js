/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// addEventListener - добавить слушателя событий
addListenerBtn.addEventListener('click', (event) => {
    // event - обьект события мыши
    console.log(event)
    console.log('Вешаю слушателя на целевую кнопку');

    // подписаться на событие клик
    targetBtn.addEventListener('click', onTargetBtnClick)
});

removeListenerBtn.addEventListener('click', event => {
    console.log('Снимаю слушателя события с целевой кнопки');

    // одписаться от события клик
    targetBtn.removeEventListener('click', onTargetBtnClick);
});
    
function onTargetBtnClick(event) {
    console.log(event);
    console.log('Клик по целевой кнопке');
}

// Именование колбеков для слушателей

// function handleTargetButtonClick() {
//     console.log('Клик');
// }

// function targetButtonClickHandler() {
//     console.log('Клик');
// }

// function ontargetButtonClick() {
//     console.log('Клик');
// }