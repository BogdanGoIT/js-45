// цепочки вызовов chaining

const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((curr, next) => curr - next);
// console.log(sorted);


// цепочка предыдущих трех
const sorted = numbers.filter(num => num > 2).map(num => num * 3).sort((curr, next) => curr - next);
console.log(sorted);


const players = [
    { id: 'id-1', name: 'Mango', isOnline: false, rank: 800},
    { id: 'id-2', name: 'Poly',  isOnline: true, rank: 600},
    { id: 'id-3', name: 'Kiwi',  isOnline: true, rank: 100 },
    { id: 'id-4', name: 'Ajax',  isOnline: false, rank: 400 },
];

const onlineAndSorted = players
    .filter(player => player.isOnline)
    .sort((playerA, playerB) => playerA.rank - playerB.rank);

console.table(onlineAndSorted);
