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

// refs.input.addEventListener('focus', onFocusInput);
// refs.input.addEventListener('blur', onFocusBlur);
// используем для radio и checkbox:
// refs.input.addEventListener('change', onInputChange);
// используем для полей для текста:
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange)
function onFocusInput() {
    console.log('Инпут получил - событие focus')
}

function onFocusBlur() {
    console.log('Инпут потерял фокус - событие blur')
}

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
    console.log(event.currentTarget.checked);
    console.log(refs.btn.disabled);

    // когда чекбокс не выбран
    refs.btn.disabled = !event.currentTarget.checked;
}