import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ListItem from '../../model/ListItem';

// Enumeração para os estados de filtro
export enum FilterState {
  All = 'ALL',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
}

// Interface para o estado das tarefas
interface TasksState {
  tasks: ListItem[];
  filter: FilterState;
}

// Estado inicial
const initialState: TasksState = {
  tasks: [],
  filter: FilterState.All,
};

// Criação do slice para as tarefas
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ListItem>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
    clearTasks: (state) => {
      state.tasks = [];
    },
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, clearTasks, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
