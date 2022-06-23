// import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout((x) => {
    
//     console.log('1 - Внутри callback для setTimeout');
//     console.log(x);

// }, 2000, 5);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// console.log('После вызова setTimeout');


/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const logger = time => {
//     console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;

// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//     clearTimeout(timerId);
// }


/*
 * Метод setInterval(callback, delay, args)
 */

// const logger = time => {
//     console.log(`Лог через ${time}ms - ${Date.now()}`);
// };

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval');

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

/*
 * Очистка таймаута с clearInterval(timeoutId)
 */

// if (shouldCancelTimer) {
//     clearInterval(intervalId);
// }