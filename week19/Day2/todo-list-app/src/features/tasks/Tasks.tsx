import React from 'react';
import TasksTitle from './TasksTitle.tsx';
import TasksInput from './TasksInput.tsx';
import TasksList from './TasksList.tsx';
import TasksFilterButtons from './TasksFilterButtons.tsx';

// Componente principal para as tarefas
const Tasks: React.FC = () => {
  return (
    <div>
      <TasksTitle />
      <TasksInput />
      <TasksList />
      <TasksFilterButtons />
    </div>
  );
};

export default Tasks;
