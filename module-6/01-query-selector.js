// выбирать элименты (селектор запросов)

const magicBtn = document.querySelector('.js-button');
console.log(magicBtn);

// document.querySelector('selector') и document.querySelectorAll('selector')
//  selector - любой валидный CSS-селектор

// Что возвращает? Аналог find

magicBtn.addEventListener('click', () => {

    // находит один уникальный, первое совпадение
    const navEl = document.querySelector('.site-nav'); // null
    console.log(navEl);

    // найти колекцию в поддереве navEl
    const navLinksEl = navEl.querySelectorAll('.site-nav__link');  // NodeList []
    console.log(navLinksEl);

})

// Document.querySelector и Element.querySelector

// свойства элиментов (properties)



