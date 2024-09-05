import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import { memo } from 'react';


const selectTasksForSelectedDate = createSelector(
  state => state.planner.tasks,
  state => state.planner.selectedDate,
  (tasks, selectedDate) => tasks[selectedDate] || []
);

const TaskList = memo(() => {
  const selectedDate = useSelector(state => state.planner.selectedDate);
  const tasks = useSelector(selectTasksForSelectedDate);

  return (
    <div>
      <h2>Tasks for {selectedDate}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <EditTask task={task} date={selectedDate} />
            <DeleteTask taskId={task.id} date={selectedDate} />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;

