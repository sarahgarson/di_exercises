import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectBooksByGenre, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../store/bookSlice';

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  const booksByGenre = useSelector(state => 
    selectedGenre === 'All' ? allBooks : selectBooksByGenre(state, selectedGenre)
  );

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <h2>Book Inventory</h2>
      <div>
        <button onClick={() => handleGenreChange('All')}>All</button>
        <button onClick={() => handleGenreChange('Horror')}>Horror</button>
        <button onClick={() => handleGenreChange('Fantasy')}>Fantasy</button>
        <button onClick={() => handleGenreChange('Science Fiction')}>Science Fiction</button>
      </div>
      <ul>
        {booksByGenre.map(book => (
          <li key={book.id}>{book.title} by {book.author} - {book.genre}</li>
        ))}
      </ul>
      <div>
        <p>Total Books: {allBooks.length}</p>
        <p>Horror Books: {horrorBooks.length}</p>
        <p>Fantasy Books: {fantasyBooks.length}</p>
        <p>Science Fiction Books: {scienceFictionBooks.length}</p>
      </div>
    </div>
  );
};

export default BookList;
