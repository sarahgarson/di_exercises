import React,{ useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos ] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue !== '') {
      setTodos([...todos, { id: Date.now(), list: inputValue, completed: false }]);
      setInputValue('');
    }
  };

const toggleTodo = (id) => {
setTodos( todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)); 
}

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
}

  return (
    <>
     <div className= "App">
      <h1>Todo's</h1>
      <div className="todo-container">
      {todos.map((todo) => (
        <div key={todo.list} className="todo-item">
          <span onClick={() => toggleTodo(todo.id)}
          
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.list}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      
        </div>
      </div>

    </>
  )
}

export default App;
