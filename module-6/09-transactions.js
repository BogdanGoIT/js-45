import transactionHistory from './data/transactions.js'

{/* <tr>
    <td>ID транзакции</td>
    <td>Сумма</td>
    <td>Дата</td>
    <td>Кто</td>
    <td>Тип транзации</td>
    <td>Имя счёта</td>
    <td>Номер счёта</td>
</tr> */}

const makeTransactionTableRowMarkup = transaction => {
    const { id, amount, date, business, name, type, account } = transaction;

    return `<tr>
                <td>${id}</td>
                <td>${amount}</td>
                <td>${date}</td>
                <td>${business}</td>
                <td>${type}</td>
                <td>${name}</td>
                <td>${account}</td>
            </tr>`;
};


console.log(transactionHistory);

console.log(makeTransactionTableRowMarkup(transactionHistory[2]));

const tableEl = document.querySelector('.js-transaction-table');

// получаем массив строк, но повесить массив не можем, поэтому join - делаем одну огромною строку
const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('');

// принимает одну строку, а не массив строк
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

console.log(makeTransactionTableRows);
