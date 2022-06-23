/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;

    setTimeout(() => {
        if (canFulfill) {
        resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
        }

        reject('Промис выполнился с ошибкой (отклонён, rejected)');
    }, 2000)
    
})

// promise.then(onFulfilled, onError)

function onFulfilled(res) {
    console.log(res);
}

function onError(err) {
    console.log(err);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
    .then(onFulfilled)
    .then(x => {
        console.log(x);
        return 10;
    })
    .then(y => {
        console.log(y)
    })
    .catch(err => console.log(err))
    .finally(()=>{console.log('я буду выполнен в любом случае')})