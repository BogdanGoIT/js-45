/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// focus - получил фокус на элемент инпут
// refs.input.addEventListener('focus', onFocusInput);

// blur - потерял фокус на элементе инпут
// refs.input.addEventListener('blur', onBlurInput);

// change - используем для radio и checkbox:
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// input - для ввода текста, каждое изминение внутри input
refs.input.addEventListener('input', onInput);

// function onFocusInput() {
//     console.log('Инпут получил - событие focus');
// }

// function onBlurInput() {
//     console.log('Инпут потерял фокус - событие blur');
// }


// function onInput(event) {
//     console.log(event.currentTarget.value)
// }


// задача 1 поставить значения инпута в спан

function onInput(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}


// задача 2 принажатии чекбокса сделать текст активный

function onLicenseChange(event) {
    
// event.currentTarget - ссылка на текущий элемент
    console.log(event.currentTarget.checked);
//  disabled - у кнопки есть свойство
    console.log(refs.btn.disabled);

// когда чекбокс не выбран
    refs.btn.disabled = !event.currentTarget.checked;
}