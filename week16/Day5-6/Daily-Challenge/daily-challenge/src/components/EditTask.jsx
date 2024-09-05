import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store/plannerSlice';

const EditTask = ({ task, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTitle.trim()) {
      dispatch(editTask({ date, taskId: task.id, updatedTask: { title: editedTitle } }));
      setIsEditing(false);
    }
  };

  if (!isEditing) {
    return <button onClick={() => setIsEditing(true)}>Edit</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <button type="submit">Save</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditTask;
