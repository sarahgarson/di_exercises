import React from 'react';
import { useRemoveTask } from './tasksHooks';

// Propriedades do componente TaskRemove
interface TaskRemoveProps {
  id: string;
}

// Componente para remover uma tarefa
const TaskRemove: React.FC<TaskRemoveProps> = ({ id }) => {
  const removeTask = useRemoveTask();

  return (
    <button onClick={() => removeTask(id)}>remove</button>
  );
};

export default TaskRemove;
