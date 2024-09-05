import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Daily Planner</h1>
        <Calendar />
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

