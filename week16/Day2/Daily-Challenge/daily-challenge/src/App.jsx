import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from "./configureStore";
import DateSelector from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Provider store={store}>
      <div>
        <h1>Daily Planner</h1>
        <DateSelector
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <AddTask selectedDate={selectedDate.toISOString().split('T')[0]} />
        <TaskList selectedDate={selectedDate.toISOString().split('T')[0]} />
      </div>
    </Provider>
  );
};

export default App;

