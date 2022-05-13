/*
 * Свойство innerHTML 
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);

// если нужно очистить значение элимента, или записать полностью новое
// titleEl.innerHTML = '<a href="">Это ссылка)</a>';
// titleEl.innerHTML = '';

// возвращает весь вложенный контент от и до
// console.log(titleEl.innerHTML);

/*
 * Вставка разметки с insertAdjacentHTML(position, string)
    "beforebegin" - перед началом тега
    "afterend" - после тега
    "afterbegin" - первым элиментом внутри тега
    "beforeend" - добавляет последним внутри тега
 */

// создает разметку и в конец либо начало добавляет не изминяя того что там было
titleEl.insertAdjacentHTML("beforeend", '<a href="" class="title__link">Это ссылка)</a>')