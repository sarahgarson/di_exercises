import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);