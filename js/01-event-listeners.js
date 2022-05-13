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

// добавить слушателя событий
addListenerBtn.addEventListener('click', () => {
    console.log('Вешаю слушателя на целевую кнопку');

    targetBtn.addEventListener('click', onTargetBtnClick)
});

removeListenerBtn.addEventListener('click', () => {
    console.log('Снимаю слушателя события с целевой кнопки');

    targetBtn.removeEventListener('click', onTargetBtnClick);
});
    
function onTargetBtnClick() {
    console.log('Клик по целевой кнопке');
}
// function handleTargetButtonClick() {
//     console.log('Клик');
// }

// function targetButtonClickHandler() {
//     console.log('Клик');
// }

// function ontargetButtonClick() {
//     console.log('Клик');
// }