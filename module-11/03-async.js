// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: 'полуниця',
    kiwi: 'kiwwwi',
    apple: 'ybluko',
  };

    return new Promise( (resolve, reject) => setTimeout(() => resolve(fruits[name]), 500));
}

async function aMakeSmoothie() {
    try {
        console.time('aMakeSmoothie')

        const apple = getFruit('apple');
        const kiwi = getFruit('kiwi');
        const strawberry = getFruit('strawberry')

        const fruits = await Promise.all([apple, kiwi, strawberry]);
        console.log(fruits);

        return fruits;

        console.timeEnd('aMakeSmoothie')
    } catch (error) {
        console.log('Ошибка ' + error)
    }

}

aMakeSmoothie('apple').then(fruuts => console.log(fruuts))

function makeSmoothie() {
    getFruit('apple').then(apple => {
        console.log(apple)

        getFruit('kiwi').then(apple => {
            console.log(apple)
        }) 
    })  
    
}

// makeSmoothie()


// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }