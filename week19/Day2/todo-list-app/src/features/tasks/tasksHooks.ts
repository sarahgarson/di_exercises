import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask, clearTasks, setFilter, FilterState } from './tasksSlice';
import { selectAllTasks, selectFilteredTasks, selectFilter } from './tasksSelectors';
import ListItem from '../../model/ListItem';

// Hook para adicionar uma tarefa
export const useAddTask = () => {
  const dispatch = useDispatch();
  return useCallback((task: ListItem) => {
    dispatch(addTask(task));
  }, [dispatch]);
};

// Hook para remover uma tarefa
export const useRemoveTask = () => {
  const dispatch = useDispatch();
  return useCallback((id: string) => {
    dispatch(removeTask(id));
  }, [dispatch]);
};

// Hook para alternar o estado de uma tarefa
export const useToggleTask = () => {
  const dispatch = useDispatch();
  return useCallback((id: string) => {
    dispatch(toggleTask(id));
  }, [dispatch]);
};

// Hook para limpar todas as tarefas
export const useClearTasks = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(clearTasks());
  }, [dispatch]);
};

// Hook para definir o filtro
export const useSetFilter = () => {
  const dispatch = useDispatch();
  return useCallback((filter: FilterState) => {
    dispatch(setFilter(filter));
  }, [dispatch]);
};

// Hook para obter todas as tarefas
export const useAllTasks = () => useSelector(selectAllTasks);

// Hook para obter tarefas filtradas
export const useFilteredTasks = () => useSelector(selectFilteredTasks);

// Hook para obter o filtro atual
export const useFilter = () => useSelector(selectFilter);
