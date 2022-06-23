
/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

// import pockemonCardTpl from './pokemon-card.hbs'

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.search-form'),
}

refs.searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
    console.log(searchQuery)
    

    fetchPockemon(searchQuery)
    .then(renderPokemonCard)
        .catch(onFetchError)
        .finally(() => {
            form.reset();
        })
}

function fetchPockemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    return fetch(url).then(response => response.json() )
    .then(pockemon => {
        console.log(pockemon);
    })
    .catch(error => console.log(error));
}

//     return промис.промис({ return response.json() })).then(pockemon => )

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError() {
    alert('Упс что то не так!');
}

////////////////////////////////////////////////////////////


// pokemon?limit=100000&offset=0

// mysite.com/api/pokemon?имя=значение&имя=значение

fetch('https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo').then(r => r.json()).then(console.log)

