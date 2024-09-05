import { createSlice } from '@reduxjs/toolkit';

const plannerSlice = createSlice({
  name: 'planner',
  initialState: {
    tasks: {},
    selectedDate: new Date().toISOString().split('T')[0],
  },
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push({ id: Date.now(), ...task });
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const taskIndex = state.tasks[date].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[date][taskIndex] = { ...state.tasks[date][taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state.tasks[date] = state.tasks[date].filter(task => task.id !== taskId);
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, setSelectedDate } = plannerSlice.actions;
export default plannerSlice.reducer;
