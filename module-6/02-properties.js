const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */



    const imageEl = document.querySelector('.hero__image');
    // console.log(imageEl);
    // console.log(imageEl.src);
    imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
    imageEl.alt = 'Це новий кіт'

    const heroTitleEl = document.querySelector('.hero__title');
    // console.log(heroTitleEl);
    console.log(heroTitleEl.textContent);
    
    // у текстовых узлов textContent у инпутов это value
    heroTitleEl.textContent = 'Я Грязный кисун'




/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// imageEl.removeAttribute('src');
// console.log(imageEl.hasAttribute('src'));
// console.log(imageEl.src);


/*
 * Data-атрибуты
 */

const actions = document.querySelectorAll('.js-actions button');
console.log(actions[2].dataset.action);
console.log(actions[2].getAttribute('data-action'));


magicBtn.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input');

    // у текстовых узлов это textContent у инпутов это value
    console.log(inputEl.value);
    inputEl.value = 'dsfakjhafj';
})

