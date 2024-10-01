import React from 'react';
import { useFilteredTasks } from './tasksHooks';
import TaskItem from './TaskItem';

// Componente para listar as tarefas
const TasksList: React.FC = () => {
  const tasks = useFilteredTasks();

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
