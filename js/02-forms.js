/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// блок выборки элиментов
const form = document.querySelector('.js-register-form');

// блок подписок
form.addEventListener('submit', onFormSubmit);

// // блок всех оброботчиков подписок
// function onFormSubmit(event) {
//     // предотвратить перезагрузку страницы
//     event.preventDefault();

//     // текущая цель
//     const formElements = event.currentTarget.elements;
//     console.dir(formElements);
//     const mail = formElements.email.value;
//     const pass = formElements.password.value;
//     const subscription = formElements.subscription.value;

//     FormData = {
//         mail,
//         pass,
//         subscription,
//     }
//     console.log(FormData);

//     console.log('Это сабмит формы');
// }

// блок всех оброботчиков подписок
function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    formData.forEach((value, name) => console.log (name, value));
    

    console.log('Это сабмит формы');
}
