import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask, updateTaskProgress } from '../store/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = useCallback(() => {
    dispatch(updateTaskProgress({ id: task.id, completed: !task.completed }));
  }, [dispatch, task.id, task.completed]);

  const handleEdit = useCallback((newTitle) => {
    dispatch(editTask({ id: task.id, title: newTitle }));
  }, [dispatch, task.id]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(task.id));
  }, [dispatch, task.id]);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <span>{task.title}</span>
      <button onClick={() => handleEdit(prompt('Edit task:', task.title))}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;

