// const doMAth = function (a, b, callback) { 
//     const result = callback(a, b);

//     console.log(result);
// }


// doMAth(5, 10, (x, y) => x + y );
// doMAth(5, 10, function (x, y) {
//     return x - y;
// });

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клик по кнопке');
};

buttonRef.addEventListener('click', handleBtnClick);