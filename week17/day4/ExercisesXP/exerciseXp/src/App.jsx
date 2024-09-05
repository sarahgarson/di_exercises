import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import BookList from './components/BookList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book Inventory Selector</h1>
        <BookList />
      </div>
    </Provider>
  );
}

export default App;

