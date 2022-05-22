// Возвращаемая ф-ция во время вызова, будет иметь доступ ко всем локальным переменным (области видимости) родительской ф-ции (той из которой её вернули) это называется "замыкание".

// const fnA = function (parametr) {
//     const innerVariable = 'значение внутренней переменной fnA';

//     const innerFunction = function () {
//         console.log('Это вызов innerFunction');
//     }

//     return innerFunction;
// }

// const fnB = fnA();

// fnB();

// console.log(fnB);


// Поварёнок

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`)
//     }

//     return makeDish;
// }

// const mango = makeSheff('Mango');
// mango('пирожок');
// mango('котлеты');

// const poly = makeSheff('Polly');
// poly('чай');
// poly('омлет');


// Округлятор

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);

// console.log(rounder2(3.456));
// console.log(rounder3(3.45644));


// Приватные данные и ф-ции - скрытие реализации, интерфейс

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);

// console.dir(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

// Приватные данные и ф-ции - скрытие реализации, интерфейс

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'ты офигел?';
            }

            salary += amount;
        },

        lower(amount) {
            salary -= amount;
        },

        current() {
            return `Текущая зарплата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(50000));

console.log(salaryManager.current());
