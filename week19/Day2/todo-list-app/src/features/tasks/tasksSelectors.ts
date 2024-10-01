import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { FilterState } from './tasksSlice';

// Seletor para obter todas as tarefas
export const selectAllTasks = (state: RootState) => state.tasks.tasks;

// Seletor para obter o filtro atual
export const selectFilter = (state: RootState) => state.tasks.filter;

// Seletor para obter tarefas filtradas
export const selectFilteredTasks = createSelector(
  [selectAllTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case FilterState.Active:
        return tasks.filter(task => !task.checked);
      case FilterState.Completed:
        return tasks.filter(task => task.checked);
      default:
        return tasks;
    }
  }
);
