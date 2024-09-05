import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 2, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Horror' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 4, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 5, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 6, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' },
  ]
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
});

export const selectBooks = state => state.books.books;

export const selectBooksByGenre = createSelector(
  [selectBooks, (_, genre) => genre],
  (books, genre) => books.filter(book => book.genre === genre)
);

export const selectHorrorBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  books => books.filter(book => book.genre === 'Science Fiction')
);

export default bookSlice.reducer;


