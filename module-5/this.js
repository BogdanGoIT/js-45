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

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// при передаче методов обьекта как callback контекст не сохраняется

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);


// call и apply

// const showThis = function (...args) {
//     console.log(args);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA);

// // передаем аргументы как массив
// showThis.apply(objA, [5, 10, 15]);

// const objB = {
//     a: 788,
//     b: 250,
// };


// // обращаюсь к обькту ф-ци showThis, вызови у себя метод call(context, [...args])
// showThis.call(objB, 10, 20, 30);

// showThis();



// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };


// const hat = {
//     color: 'black',
// }

// changeColor.call(hat, 'orange');
// console.log(hat);


// const sweater = {
//     color: 'green',
// }

// // changeColor.call(sweater, 'blue');
// // console.log(sweater);


// // bind - делает копию с привязаным контекстом( оригинальная ф-ция не изминяяется )
// // changeColor();
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);



// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);



// function showThis() {
//   console.log('this in showThis: ', this);
  
// }

// showThis(); // this in showThis: Window // "use strict" => undefined

// const user = {
//   username: 'Mango',
//   // showContext: function showThis() {
//   //   console.log('this in showThis: ', this);
//   // }
// };

// user.showContext = showThis; 

// user.showContext();  // user.showContext =  function showThis() { console.log('this in showThis: ', this); }