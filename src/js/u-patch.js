// PUT - удаление с заменой
// PATCH - обновляет старое на новое

const BASE_URL = 'http://localhost:4040';


function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    }

    return fetch(`${BASE_URL}/books/${bookId}`, options)
        .then(res => res.json())
        .then(console.log)
}

// updateBookById({ title: 'Большая новая книга по NODE.JS' }, 20);

// updateBookById({ rating: 1 }, 19);

// updateBookById({ rating: 4, author: 'Mango' }, 18);