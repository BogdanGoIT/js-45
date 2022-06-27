// import './js/users'

// import './js/crud';
// import './js/async-crud';

// import './sass/main.scss';
// import './js/r-get'
// import './js/c-post';
// import './js/u - patch';
// import './js/d-delete';

// console.log('Hello World');

/* 
    https://jsonplaceholder.typicode.com - це ендпоінт, базовий URL, точка входу в API.
    /users - ресурс, до якого ми звертаємося.
 */


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//       console.log(data)
//   })
//   .catch(error => {
//     // Error handling
//       console.log(error)
//   });


// Під час складання рядків параметрів, створюється екземпляр класу URLSearchParams та ініціалізується об'єктом. Результатом буде спеціальний об'єкт (ітератор) з методами, який у рядковому перетворенні повертає результат виклику методу toString() - своє рядкове відображення.

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString())



/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import './sass/common.scss';
import NewsApiService from './js/components/news-service'
import { renderUserList } from "./js/components/articles";
import LoadMoreBtn from './js/components/load-more-btn'

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

console.log(newsApiService);
console.log(loadMoreBtn);


function onSearch(e) {
    e.preventDefault();

    
    newsApiService.query = e.currentTarget.elements.searchQuery.value;

    if (newsApiService.query === '') {
        return alert('Введи что то нормальное!');
    }

    loadMoreBtn.show();
    newsApiService.resetPage();
    
    clearArticlesContainer();
    fetchArticles();
}


function fetchArticles() {
    loadMoreBtn.disable();
    newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        loadMoreBtn.enable();
    })
}


function appendArticlesMarkup(articles) {
    console.log('appendArticlesMarkup: ', articles);
  refs.articlesContainer.insertAdjacentHTML('beforeend', renderUserList(articles));
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}
