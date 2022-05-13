// js задача 2
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// // якщо змынна key буде динамічною, відразу використовуємо квадратні дужки user[key]
// for (let key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }


// Object.values function задача 2

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }


// function countSalary(obj) {
    
//     const values = Object.values(obj);

//     let total = 0;

//     for (let value of values) {
//         total += value;
//     }

//     return total;
// }

// console.log(countSalary(salaries));


// 3 - массив обьектов

// const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Брилиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];



// function calcTotalPrice(stones, stoneName) {

//     for (let {price, quantity, name} of stones) {
//         if (name === stoneName) {
//             return price * quantity;
//         }
    
//     }

//     return `${stoneName} такого каміння немає!`;
// }

// console.log(calcTotalPrice(stones, 'Щебень'));


// комплексные задачи - 4

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// }


// const account = {
//     // Текущий баланс счета
//     balance: 0,

//     // Исторяи транзакций
//     transactions: [],

//     // - метод создает и возвращает обьект транзакции.
//     // - принимает сумму и тип транзакции
//     createTransaction(amount, type) {
//         return {
//             amount,
//             type,
//             id: this.transactions.length,
//         }
//     },

//    // Метод возвращает текущий баланс
//     getBalance() {
//         // this - доступна лише у функціях, за межами ф-ції ми її використання не можливе
//         // let this = account
//         return this.balance;  
//     },
    
//     // - метод отвечающий за добавление сумы к балансу
//     // - принимает суму транзакции
//     // - вызывает createTransaction для создания обьекта транзакции
//     // - после чего добавляет его в историю транзакций
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(transaction);
//     },


//     // - метод отвечающий за снятие сумы с балансу
//     // - принимает суму транзакции
//     // - вызывает createTransaction для создания обьекта транзакции
//     // - после чего добавляет его в историю транзакций

//     // - если amount больше чем текущий баланс, выведи сообщение о том, что снятие такой сумы не возможно, недостаточно средств
//     withdraw(amount) {
//         if (amount > this.balance) {
//             return 'снятие такой сумы не возможно, недостаточно средств';
//         }
//         this.balance -= amount;
//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(transaction);
//     },

//     // метод ищет и возвращает обьекттранзакции по id
//     getTransactionDetails(id) {
//         for (let transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//         return 'такої операції не існує!';
//     },

//     // метод возвращения кол-во средств
//     // определенного типа из всей истории транзакций
//     getTransactionTotal(type) {
//         let total = 0;

//         for (let transaction of this.transactions) {
//             if (transaction.type === type) {
//                 total += transaction.amount;
//             }
//         }

//         return total;
//     }
// }

// console.log(account.getBalance());
// // console.log(account.createTransaction(120, 'deposit'));

// account.deposit(135);
// account.withdraw(50);
// account.deposit(150);
// account.withdraw(100);

// console.log(account.getTransactionDetails(3));
// console.log(account);

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));