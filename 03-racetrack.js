

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('js-results-table > tbody'),
}

refs.startBtn.addEventListener('click', () => {
    const promises = horses.map(run);

    updateWinnerField('');
    updateProgressField('Заезд начался ставки не принимаються!');

    Promise.race(promises).then(({ horse, time }) => {
        updateWinnerField(`Победил ${horse}, финишировал за ${time} времени`);
    });

    Promise.all(promises).then(() => {
        updateProgressField('Заезд окончен принимаються ставки!')
    })
});

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}


function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({horse, time})
        }, time);
    })
}

run('Лавров')
    .then(r => console.log(r))
    


function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

const promises = horses.map(run);
console.log(promises);

// Promise.race(promises).then(({ horse, time }) => {
//     console.log(`Победил ${horse}, финишировал за ${time} времени`)
// })


/*
 * Promise.all([]) для ожидания всех промисов
 */

Promise.all(promises).then(r => console.log(r))

