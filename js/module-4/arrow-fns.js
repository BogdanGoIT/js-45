// Стрелочные ф-ции

function add(a, b, c) {
    console.log(arguments);
    console.log(a, b, c);
    return a + b + c;
}

// 1. если 2 и больше параметра то скобки обязательны
// 2. если 1 параметр скобки можно пропустить
// 3. если параметров нет, обязательно пустые скобки
// 4. если тело выполняет больше чем 1 инструкцию, тогта ставим фигурные скобки

// 6. у стрелочных ф-ций нет локальной переменной arguments
const addArrow = (a, b, c) => {
    // console.log(arguments);
    console.log(a, b, c);
    return a + b + c;
}

// 7. Получить все аргументы
const addArr = (...args) => {
    console.log(args);
}

// 5. если в теле 1 инстркция возврата (неявный возврат) можно опустить тело ф-ции
const addArro = (a, b, c) => a + b + c;

console.log(add(5, 10, 15));
console.log(addArrow(5, 10, 5));
console.log(addArro(5, 10, 5));

addArr(5, 10, 5);



const fnA = function () {
    return {
        a: 5,
    };
}

// 8. Неявный возврат обьекта
const arrowFnA = () => ({ a: 5, b: 5 });

console.log(fnA());

console.log(arrowFnA());