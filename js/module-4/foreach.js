// foreach - просто замена фора

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(number => {
//     console.log(number);
// });

// forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, arr) => console.log(number > arr[index - 1]));

console.log(numbers);

// forEach
const logItems = (items) => 
    items.forEach( (element, index) => console.log(`${index} - ${element}`) );


logItems(['Mango', 'Poly', 'Ajax']);