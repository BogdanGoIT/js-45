// const doMAth = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }


// doMAth(5, 10, (x, y) => x + y );
// doMAth(5, 10, function (x, y) {
//     return x - y;
// });


/* Отложенный вызов: регистрация событий */

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клик по кнопке');
// };

// buttonRef.addEventListener('click', handleBtnClick);


/* Отложенный вызов: геолокация */

// const onGetPositionSucces = function (position) {
//     console.log(position);
// }

// const onGetPositionError = function (error) {
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSucces, onGetPositionError);

// 1. Надо передать ф-цию
// 2. Ф-ция получает элимент массива
// 3. если элимент массива удовлитворяет условие то ф-ция вернет true
// 4. если элимент массива НЕ удовлитворяет условие то ф-ция вернет false

const filter = function (array, test) {
    const filterArr = [];

    for (const arr of array) {
        console.log(arr);
        const passed = test(arr); 

        if (passed) {
            filterArr.push(arr);
        }

    }

    return filterArr;
}

const callback = function (value){
    return value >= 3
}

console.log(filter([1, 2, 3, 4, 5], callback));
console.log(filter([1, 2, 3, 4, 5], value => value <= 4));

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

console.log(filter(fruits, getFruitsWithQuantity));



// function logProduct(product) {
//     console.log(product);
// }

// function logTotalPrice({price, quantity}) {
//     console.log(price * quantity);
// }

// function createProduct(obj, cb) {
//     const product = { ...obj, id: Date.now(), }
//     cb(product);
// }

// createProduct(
//     {
//         name: 'apple',
//         price: 30, quantity: 3
//     },
//     logProduct
// );
// createProduct({name: 'lemon', price: 20, quantity: 5}, logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     usarname: 'Jacob',
//     balance: 400,
//     withdraw(amount, onError, onSuccess) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError('сума перевишує ліміт');
//             return;
//         }
//         if (amount > this.balance) {
//             onError("сума перевищує баланс");
//             return;
//         }

//         this.balance -= amount;
//         onSuccess('кошти знято успішно')
//     },
//     deposit(amount, onError, onSuccess) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError('сума перевишує ліміт');
//             return;
//         }
//          if (amount < 0) {
//             onError('сума меньша нуля');
//             return;
//         }
//          if (amount === 0) {
//             onError('ви ввели не коректну суму');
//             return;
//         }
//         this.balance += amount;
//         onSuccess('баланc поповнено успішно');
//     }
// }

// function handleSuccess(message) {
//     console.log('Success', message);
// }

// function handleError(message) {
//     console.log('Error: ', message);
// }

// // account.withdraw(2000, handleError);
// // account.withdraw(600, handleError);

// account.withdraw(300, handleError, handleSuccess);
// account.deposit(0, handleError, handleSuccess);



// function each(array, cb) {
//     const result = [];
//     for (let arr of array) {
//         result.push(cb(arr));
//     }

//     return result;
// }

// console.log(
//     each([64, 49, 54, 52, 16], value => value * 2)
// );
    
// console.log(
//     each([64, 49, 54, 52, 16], value => value - 20)
//     );

