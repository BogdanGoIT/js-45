const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// Array.prototype.every()
// - поэлиментно перебирает оригинальный массив
// - возвращает true если все элементы удовлетворюют условию

const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// Array.prototype.some()
// - поэлиментно перебирает оригинальный массив
// - возвращает true если хотя бы один элимент массива удовлитворяет условию

const isAnyOnline = players.some(({ online }) => online)
// console.log(isAnyOnline);