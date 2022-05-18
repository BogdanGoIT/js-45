/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];


// console.log(options);

// console.log(buttonEl);


const colorPickerContainer = document.querySelector('.js-color-picker');

// new school
// const elements = colorPickerOptions.map(option => {

//     const buttonEl = document.createElement('button');

//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// });



// old school 

// for (let i = 0; i < colorPickerOptions.length; i += 1){
//     const options = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
    
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = options.label;
//     buttonEl.style.backgroundColor = options.color;

//     elements.push(buttonEl);
// }



/*
 * Пишем функцию для создания разметки колорпикера
 */
const makeColorPickerOptions = options => {
    return options.map(option => {

        const buttonEl = document.createElement('button');

        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker__option');
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;

        return buttonEl;
    })
}

const elements = makeColorPickerOptions(colorPickerOptions);

colorPickerContainer.append(...elements);