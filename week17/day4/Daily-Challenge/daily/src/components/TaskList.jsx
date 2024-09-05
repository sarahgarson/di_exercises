import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory, selectCompletedTasks } from '../store/selectors';
import TaskItem from './TaskItem';

const TaskList = ({ selectedCategory }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, selectedCategory));
  const completedTasksCount = useSelector(selectCompletedTasks);

  return (
    <div>
      <h2>Tasks</h2>
      <p>Completed tasks: {completedTasksCount}</p>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
