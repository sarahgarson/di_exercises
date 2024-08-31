export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (date, task) => ({
  type: ADD_TASK,
  payload: { date, task }
});

export const editTask = (date, taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { date, taskId, updatedTask }
});

export const deleteTask = (date, taskId) => ({
  type: DELETE_TASK,
  payload: { date, taskId }
});
