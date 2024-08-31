import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = {};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        [action.payload.date]: [
          ...(state[action.payload.date] || []),
          { id: Date.now(), ...action.payload.task }
        ]
      };
    case EDIT_TASK:
      return {
        ...state,
        [action.payload.date]: state[action.payload.date].map(task =>
          task.id === action.payload.taskId ? { ...task, ...action.payload.updatedTask } : task
        )
      };
    case DELETE_TASK:
      return {
        ...state,
        [action.payload.date]: state[action.payload.date].filter(task => task.id !== action.payload.taskId)
      };
    default:
      return state;
  }
};

export default tasksReducer;
