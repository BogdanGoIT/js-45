// Явный и неявный возврат

// const add = (a, b) => {
//     console.log(a, b);
//     return a + b;
// }


// const add = (a, b) => a + b;

// псевдомассив arguments

// const add = (...args) => {
//     console.log(args);
// }

// add(1, 2, 3, 4, 5, 6, 7);


// // context

// // контекст стрелки определяется местом её обявления, а не вызова и ссылается на контекст родительской функции.
// const showThis = () => {
//     console.log('this in showThis', this);
// }

// showThis(); // this in showThis undefined

// const user = { name: 'Mango', }
// user.showContext = showThis;

// user.showContext(); // this in showThis undefined



// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);

//         const inner = () => {
//             console.log('this.inner ', this);
//         }
//         inner();
//     },
// }

// user.showName();


// стрелки как методы обьекта не работают // undefined


// refactoring

const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwoo = numbers.filter(num => num > 2);
// console.log(greaterThenTwoo);

// const multByTwo = numbers.map(num => num * 2);
// console.log(multByTwo);

// const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

// chaining

// const res = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);

// console.log(res);


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


// увеличиваем кол-во поинтов каждого игрока на 10%
// const updatePlayers = players.map(player => ({
//     ...player,
//     points: player.points * player.points * 0.1
// }));

// console.table(updatePlayers);
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player =>
//     playerIdToUpdate === player.id
//         ? { ...player, timePlayed: player.timePlayed + 100 }
//         : player,
//  );

//  console.table(updatedPlayers)

