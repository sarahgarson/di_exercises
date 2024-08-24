import React from 'react';
import { TaskProvider } from './component/TaskContext';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';
import TaskFilter from './component/TaskFilter';
import './App.css';


function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Enhanced Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;





