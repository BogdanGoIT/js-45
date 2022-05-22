// console.log(_.isEmpty({a: 1}));

const user = {
    name: 'Mango',
    location: {
        city: 'Lviv',
    }
}

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// console.log(user?.location?.city);

// union

console.log(_.union([1, 2, 3], [3, 4, 5]));

// range

console.log(_.range(0, 10, 2));

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// sumBy

console.log(_.sumBy(players, player => player.timePlayed));

// minBy

console.log(_.minBy(players, player => player.timePlayed));

