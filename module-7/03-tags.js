/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// В1

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     // если плохо уходим
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     // ищем текущий активный
//     const currentActiveBtn = document.querySelector('.tags__btn--active');

//     // если есть класс .tags__btn--active удаляем
//     // if (currentActiveBtn) {
//     //     currentActiveBtn.classList.remove('tags__btn--active');
//     // }

//     // проверка свойств обьекта ? - если не null или undefined, класс .tags__btn--active удаляем
//     currentActiveBtn?.classList.remove('tags__btn--active');

//     const nextActiveBtn = evt.target;

//     // если нет класса .tags__btn--active добавляем
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;

//     console.dir(selectedTag);
// }

// В2

const tagsContainer = document.querySelector('.js-tags');

// набор уникальных элементов
const selectedTags = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
    // если плохо уходим
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    } 

    const btn = evt.target;
    const tag = btn.dataset.value;

    // contains - есть ли класс .tags__btn--active
    const isActive = btn.classList.contains('tags__btn--active');
    
    if (isActive) {
        // удалить значение элимента
        selectedTags.delete(tag);
    } else {
        // добавь значене элимента
        selectedTags.add(tag);
    }
    
    // toggle - если класс есть, он снимит, если нет добавит
    btn.classList.toggle('tags__btn--active');
    console.log(selectedTags)
}