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

// блок всех оброботчиков подписок
// function onFormSubmit(event) {

//     // preventDefault - предотвратить перезагрузку страницы
//     event.preventDefault();

//     // - urrentTarget - текущая цель - ссылается на элимент подписки события -> form
//     // console.log(event.currentTarget)
//     // - ссылается на элементы значений subscription
//     // console.dir(event.currentTarget.elements.subscription.value);

//     // все элементы формы    
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

    
// }


// блок всех оброботчиков подписок
function onFormSubmit(event) {
    event.preventDefault();

    // если вам нужно собрать данные большой формы
    const formData = new FormData(event.currentTarget)

    // первый параметр значение поля, второй имя 
    formData.forEach((value, name) => console.log(name, value));
    
}
