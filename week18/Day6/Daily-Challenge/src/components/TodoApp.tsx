import React, { useState } from 'react';
import List from './List';

// Interface para a estrutura de um item Todo
interface Todo {
  id: number;
  text: string;
}

const TodoApp: React.FC = () => {
  // Estado para armazenar a lista de todos
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn TypeScript' },
    { id: 2, text: 'Build a Todo App' },
  ]);

   // Estado para armazenar o texto do novo todo
   const [newTodoText, setNewTodoText] = useState<string>('');

  // Função para adicionar um novo todo
  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText.trim(),
      };
      setTodos([...todos, newTodo]);
      setNewTodoText(''); // Limpa o campo de entrada após adicionar
    }
  };

  // Função para atualizar o texto do novo todo
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  // Função para renderizar cada item todo
  const renderTodo = (todo: Todo) => <span>{todo.text}</span>;

  return (
    <div>
      <h1>Todo List</h1>
      <List items={todos} renderItem={renderTodo} />
      <div>
      <input 
          type="text" 
          value={newTodoText} 
          onChange={handleInputChange} 
          placeholder="Enter new todo"
        />
      <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoApp;

// Notas para mimmm :) :
// Interface para a estrutura de um item Todo
// Define a forma dos objetos todo

// Estado para armazenar a lista de todos
// Inicializado com dois todos de exemplo

// Função para adicionar um novo todo
// Cria um novo todo com um id único e o adiciona à lista 
//adicionei dessa vez tbm o input para podermos mudar o nome da task :)

// Função para renderizar cada item todo
// Define como cada todo será exibido na lista
