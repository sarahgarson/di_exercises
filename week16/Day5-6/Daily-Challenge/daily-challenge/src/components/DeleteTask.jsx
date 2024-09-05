import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/plannerSlice';

const DeleteTask = ({ taskId, date }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ date, taskId }));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTask;
