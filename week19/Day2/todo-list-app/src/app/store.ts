import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice.ts';

// Configuração da store Redux
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Tipos para o estado raiz e o dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
