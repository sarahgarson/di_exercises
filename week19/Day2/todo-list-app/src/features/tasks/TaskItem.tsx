import React from 'react';
import ListItem from '../../model/ListItem';
import { useToggleTask } from './tasksHooks';
import TaskRemove from './TaskRemove.tsx';

// Propriedades do componente TaskItem
interface TaskItemProps {
  task: ListItem;
}

// Componente para renderizar um item de tarefa
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const toggleTask = useToggleTask();

  return (
    <li>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.checked ? 'line-through' : 'none' }}>
        {task.item}
      </span>
      <TaskRemove id={task.id} />
    </li>
  );
};

export default TaskItem;
