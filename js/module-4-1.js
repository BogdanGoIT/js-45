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
