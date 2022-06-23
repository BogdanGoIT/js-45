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
// import NewsApiService from './js/news-service'

const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
const BASE_URL = 'http://newsapi.org/v2/';
const options = {
    headers: {
        Authorization: API_KEY,
    },
};

class NewsApiService {
    constructor() {
        this.searchQuery = '';   
        this.page = 1;
    }
    
    fetchArticles() {
        // console.log('До запроса: ', this)

        const url = `${BASE_URL}everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

        return fetch(url, options)
            .then(response => response.json())
            .then(({articles}) => {
                
                this.incrementPage();
                // console.log('После запроса если все ок: ', this);

                return articles;
            })
    }

    incrementPage() {
        this.page += 1;
    }

    resetPgae() {
        this.page = 1;
    }
    
    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

const refs = {
  searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const newsApiService = new NewsApiService();
console.log(loadMoreBtn)

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles)


function onSearch(e) {
    e.preventDefault();
    
    newsApiService.query = e.currentTarget.elements.query.value;
    if (newsApiService.query === '') {
        return alert('введи что то нормальное!')
    }

    loadMoreBtn.show();
    newsApiService.resetPgae();
    clearArticlesContainer();
    fetchArticles();

}

function fetchArticles() {
        loadMoreBtn.disable();
    newsApiService.fetchArticles().then(articles => {
        console.log(articles);
        loadMoreBtn.enable();
    })
}

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}


