import React, { useState } from 'react';
import { useAddTask } from './tasksHooks';
import ListItem from '../../model/ListItem';

// Componente para adicionar novas tarefas
const TasksInput: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const addTask = useAddTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(new ListItem(Date.now().toString(), newTask, false));
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="write here yours new task"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default TasksInput;
