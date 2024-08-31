import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../actions/taskActions';

const Task = ({ task, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedText.trim() !== task.text) {
      dispatch(editTask(date, task.id, { text: editedText }));
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(date, task.id));
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <button onClick={handleEdit}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;