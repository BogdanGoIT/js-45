// import '../css/common.css';
// import BSN from 'bootstrap.native';

// const modal = new BSN.Modal('#subscription-modal');
// console.log(modal);
// modal.show();

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('нужно остановить интервал');
//         clearInterval(intervalId);
//         return;
//     }
//     console.log('подпишись на рассылку! - ' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);

const refs = {
    modal: document.querySelector('subscription-modal'),
}

