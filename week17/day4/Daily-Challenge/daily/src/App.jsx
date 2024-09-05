import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import { addTask } from './store/taskSlice';
import { addCategory } from './store/categorySlice';

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle && selectedCategory) {
      dispatch(addTask({ title: newTaskTitle, categoryId: selectedCategory }));
      setNewTaskTitle('');
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategoryName) {
      console.log('Adding category:', newCategoryName); // Add this line
      dispatch(addCategory(newCategoryName));
      setNewCategoryName('');
    }
  };

  return (
    <div className="App">
      <h1>Productivity Tracker</h1>
      
      <form onSubmit={handleAddCategory}>
        <input 
          type="text" 
          value={newCategoryName} 
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="New Category Name"
        />
        <button type="submit">Add Category</button>
      </form>

      <CategorySelector
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          value={newTaskTitle} 
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New Task Title"
        />
        <button type="submit">Add Task</button>
      </form>

      <TaskList selectedCategory={selectedCategory} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;


