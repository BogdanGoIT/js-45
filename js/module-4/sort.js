// Array.prototype.sort(callback(currentEl, nextEl){})
// - сортирует и ИЗМИНЯЕТ оригиналный массив
// По умолчанию:
// - сортирует по возростанию
// - приводит элименты к строке и сортирует по [Unicode]

const numbers = [1, 9, 6, 2, 3];

// console.log(numbers.sort());

const letters = ['b', 'B', 'a', 'A'];

// console.log(letters.sort());

// Фу-кция сравнения (callback)
numbers.sort((currEl, nextEl) => nextEl - currEl);

// console.log(numbers);

// как сделать копию массива что бы не сортировать оригинал
// - Array.prototype.slice()
// - Операция spread

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort().reverse();
console.log('ascSortedNumbers', ascSortedNumbers);
console.log('descSortedNumbers', descSortedNumbers);

// кастомная сортировка сложных типов
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByBestPlayers);