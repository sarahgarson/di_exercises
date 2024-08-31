import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

import DateSelector from './DatePicker';


const TaskList = ({ tasks, selectedDate }) => {
  return (
    <div>
      <h2>Tasks for {selectedDate}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} date={selectedDate} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasks[ownProps.selectedDate] || []
});

export default connect(mapStateToProps)(TaskList);

