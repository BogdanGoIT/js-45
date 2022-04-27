// Ф-кция - это частный случай обьекта -> ССЫЛОЧНЫЙ ТИП

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});

// console.log('function(){} === function(){}: ',
//             function () { } === function () { }
// );

// const fnA = function () {
//     console.log('hello');
// }

// const fnB = fnA;

// console.log('fnA === fnB: ', fnA === fnB);

// Контекст .this
//  - где и как была обьявлена ф-кция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ НА КОНТЕКСТ
//  - контекст определяется в МОМЕНТ ВЫЗОВА Ф-КЦИИ, если он не привязан явно


// как метод обьекта в контексте обьекта
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

// вызов без контекста
// - в строгом режеме = undefined
// - не в строгом режеме = window

// const foo = function(){
//     console.log('foo -> this', this);
// };

// foo();


// как метод обьекта, но обьявлена как внешняя ф-кция
// в контексте обьекта

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// }

// // showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;

// console.log('user', user);

// user.showUserTag();


// вызов без контекста, но обьявлена как метод обьекта


// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     }
// };

// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();


// контекст в callback - функциях

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// }

// invokeAction(user.showTag);


// тренируемся 4

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     }

//     return changeColor;
// }

// const updataColor = makeChangeColor();
// // updataColor('yellow'); // какой this ?

// const hat = {
//     color: 'blue',
//     updataColor,
// }

// // console.log(hat.updataColor);

// hat.updataColor('orange'); // какой this ?

// тренируемся 5

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// при передаче методов обьекта как callback контекст не сохраняется

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);


// call и apply

const showThis = function (...args) {
    console.log(args);
    console.log('showThis -> this', this);
};

