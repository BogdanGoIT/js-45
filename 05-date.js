
/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// Date.now() - возвращает текущее значение времени в ms
const date1 = Date.now();
console.log('date1 ', date1);

setTimeout(() => {
    const date2 = Date.now();
    console.log('date1 ', date1);
    console.log('date2 ', date2);

    console.log(date2 - date1);
}, 3000);



// // получить текущий день 1-7
// console.log(date.getDay());

// // получить текущий месяц 0 - 12
// console.log(date.getMonth());

// UNIX время 1 января 00:00

// console.log(date.getTime());

