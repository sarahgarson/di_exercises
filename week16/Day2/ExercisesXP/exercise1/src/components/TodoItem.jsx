import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span 
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(id))}
      >
        {text}
      </span>
      <button onClick={() => dispatch(removeTodo(id))}>Delete</button>
    </li>
  );
};

export default TodoItem;