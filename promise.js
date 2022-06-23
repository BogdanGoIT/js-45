// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;
    
//     setTimeout(() => {
//         if (canFulfill) {
//         resolve('Промис выполнился успешно');
//     }

//     reject('Промис выполнился с ошибкой');
//     }, 2000)
// })

// // когда промис выполнится, вызови это
// promise.then(onFullfilled, onError);

function onFullfilled(result) {
    console.log(result)
}

function onError(error) {
    console.log(error)
}

// цепочки промисов (chaining)
// Promise.prototype.catch(error)
// Promise.prototype.finally()

// promise.then(onFullfilled) // промис значение

//     .then(
//     x => {
//         console.log(x);
//         return 10;
//     }

//     ).then(
//     y => console.log(y)

//     ).catch(error => console.log(error))
//     .finally(() => console.log('Я буду выполнен в любом случае'))

// const makeOrder = dish => {
//     const DELAY = 1000;
    
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if (passed) {
//                 resolve(`Вот ваше блюдо ${dish}`);
//             }
//             reject('Закончились продукты');
        
//         }, DELAY);

//     });
// }

// makeOrder('пирожок').then(onFullfilled).catch(onError);


// промисификация "синхронных" функций
// - Promise.resolve()
// - Promise.reject()

// const makeOrder = (dish) => {
//     return Promise.resolve(`Вот ваш заказ ${dish}`);
// }

// makeOrder('пирожок').then(onFullfilled);



// покемоны с https://pokeapi.co/

// у функции должна быть одна обязаность, одна забирает, другая рисует
// const fetchPokemonById = id => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// }

// fetchPokemonById(1).then(onFullfilled).catch(onError);

// fetchPokemonById(2).then(onFullfilled).catch(onError);

const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;

        if (passed) {
            resolve('Это resolve');
        }

        reject('fuck - это reject');
    })
}

makePromise().then(result => console.log(result)).catch(error => console.log(error))