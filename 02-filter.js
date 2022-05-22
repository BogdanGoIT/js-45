// Модель - это наши данные, а представление то что у нас есть в интерфейсе
const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 250));

// первый раз зарендерели что бы пользователь увидил интерфейс, что фильтровать
function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

const listItemMarkup = createListItemsMarkup(tech);

// innerHTML - используем когда в элименте пусто
populateList(listItemMarkup);

// insertAdjacentHTML - используете тогда когда в элименте что то есть, и вы хотите добавить
// append - если делаешь через createElement обьекты

function onFilterChange(evt) {
    console.log('INPUT');
    const filter = evt.target.value.toLowerCase();

    // если у t.label есть включая в себя подстроку которая в filter то в результате я получу отфильтрованый массив элиментов
    const filteredItem = tech.filter(t => t.label.toLowerCase().includes(filter));

    // создаем розметку новых отфильрованых, и полностью заменяем значения списка
    const listItemMarkup = createListItemsMarkup(filteredItem);
    populateList(listItemMarkup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}