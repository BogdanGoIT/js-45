// Array.prototype.reduce()
// - поэлиментно перебирает оригинальный массив
// - возвращает что угодно
// - заменяет все на свете, ноиспользовать нужно с умом


// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((accum, number) => accum + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 75


// считаем общую зарплату
const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
}

// возвращает значеня обьекта
// console.log(Object.values(salary));

const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);


// считаем общие кол-во часов
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
// console.log(totalTimePlayed);

// считаем общую сумму товаров корзины
const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((total, {price, quantity}) => total + price * quantity, 0);
// console.log(totalAmount);


// собираем все теги из твитов
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['css', 'react'] },
];

const allTags = tweets.reduce((accum, tweet) => [...accum, ...tweet.tags], [] );
console.log(allTags);

// accum = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// accum = ['js', 'nodejs'], tweet.tags = ['html', 'css']
// return [...['js', 'nodejs'], ...['html', 'css']]
// ['js', 'nodejs', 'html', 'css']

// ведем статистику тегов
const tagsStats = allTags.reduce((acc, tag) => {
    // console.log(acc[tag]);

    // if (acc[tag]) {
    //     // acc[tag] += 1;

    //     return {
    //         ...acc,
    //         [tag]: acc.tag + 1,
    //     }
    // }

    //     // acc[tag] = 1;
    // return {
    //     ...acc,
    //     [tag]: acc.tag = 1,
    // };

    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }
}, {});

// console.log(tagsStats);

const user = {
    name: 'Mango'
}

const key = 'name';

console.log(user[key]);

// если свойство с ключем tag есть, увеличить его значение на 1
// если свойства нет с таким ключем что в tag, сделать и записать 1


const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32


// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32