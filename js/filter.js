// Array.prototype.filter()
// - поэлиментно перебирает оригинальный массив
// - возвращает новый массив (с элиментами или пустой)
// - добавляет в возвращаемый массив элименты которые удовлитворяют условие колбэк-функции
// - если колбэк вернул true элимент добавляется в возвращаемый массив
// - если колбэк вернул false элимент НЕ добавляется в возвращаемый массив


const numbers = [5, 10, 15, 20, 25];


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const filteredNumberes = numbers.filter(number => number > 20);

// console.log(filteredNumberes);

// когда в параметрах ф-ции ({свойство}) при деструктуризации
const onlinePlayers = players.filter( ({online}) => online );
console.table(onlinePlayers);

// когда просто {свойство} при деструктуризации
const { a, b } = { a: 5, b: 10 };
console.log(a, b);