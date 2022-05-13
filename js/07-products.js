// импортировать массив в переменную products
import products from './data/products.js';
console.log(products);


/* 
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article> 
*/


/*
 * Пишем функцию для создания карточки продукта
 */

const productContainerEl = document.querySelector('.js-products')


const makeProductCard = ({name, description, price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const productNameEl = document.createElement('h2');
    productNameEl.textContent = name;
    productNameEl.classList.add('product__name');


    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product__descr');

    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена: ${price} кредитов`;
    priceEl.classList.add('product__price');

    productEl.append(productNameEl, descrEl, priceEl);
    
    return productEl;
}

// console.log(makeProductCard(products[1]))

const elements = products.map(makeProductCard);
console.log(elements);

productContainerEl.append(...elements);

console.log(productContainerEl);

