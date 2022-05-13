// выбирать элименты (селектор запросов)

const magicBtn = document.querySelector('.js-button');
console.log(magicBtn);

// document.querySelector('selector') и document.querySelectorAll('selector')
//  selector - любой валидный CSS-селектор

// Что возвращает? Аналог find

magicBtn.addEventListener('click', () => {

    const navEl = document.querySelector('.site-nav__item'); // null
    console.log(navEl);

    const navLinksEl = document.querySelectorAll('.site-nav__link');  // NodeList []
    console.log(navLinksEl);

})

// Document.querySelector и Element.querySelector

// свойства элиментов (properties)



