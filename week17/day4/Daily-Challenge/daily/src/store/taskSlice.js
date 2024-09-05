import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    updateTaskProgress: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = taskSlice.actions;


export default taskSlice.reducer;