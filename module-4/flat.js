// Array.prototype.flat(depth)
// - разглаживает массив до указанной глубины
// - по умолчанию глубина 1

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

console.log(array.flat(3));


// собираем все теги из твитов
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['css', 'react'] },
];


// Array.prototype.flatMap(callback)
const allTags = tweets.reduce((accum, tweet) => [...accum, ...tweet.tags], [] );
// console.log(allTags);

// const tags = tweets.map(t => t.tags).flat();
const tags = tweets.flatMap(t => t.tags);
console.log(tags);


const tagsStats = tweets
    .flatMap(t => t.tags)
    .reduce((acc, tag) => ({

            ...acc,
            [tag]: acc[tag] ? acc[tag] + 1 : 1,
            
        }),
        {}
    );

console.log(tagsStats);