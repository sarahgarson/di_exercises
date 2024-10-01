import React from 'react';
import { useAllTasks } from './tasksHooks';

// Componente para exibir o título com o número total de tarefas
const TasksTitle: React.FC = () => {
  const tasks = useAllTasks();

  return (
    <h1>Todo List ({tasks.length})</h1>
  );
};

export default TasksTitle;

