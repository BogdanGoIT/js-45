// цепочка прототипов

const objC = {
    z: 5,
};

// console.log('objC ', objC);

const objB = Object.create(objC);
objB.y = 2;

// console.log('objB ', objB);

// console.log(objB.y);
// console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;

console.log(objA.z);

objA.z = 1000;

console.log('objA ', objA);

console.log(objA.hasOwnProperty('y'));
// Это собственное свойство обьекта
// Это свойство на обьекте прототипе

// Алгоритм поиска свойства в цепочки прототипов
// 1. поиск начинается в собственных свойствах
// 2. если свойства нет в собственных, поиск переходик к цепочке прототипов
// 3. поиск прикращается при первом совпадении( есть такое свойство )
// 4. возвращаеться значение свойств