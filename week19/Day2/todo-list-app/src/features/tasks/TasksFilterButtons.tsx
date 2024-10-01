import React from 'react';
import { FilterState } from './tasksSlice';
import { useSetFilter, useFilter } from './tasksHooks';

// Componente para os botões de filtro
const TasksFilterButtons: React.FC = () => {
  const setFilter = useSetFilter();
  const currentFilter = useFilter();

  return (
    <div>
      <button onClick={() => setFilter(FilterState.All)} disabled={currentFilter === FilterState.All}>
        all
      </button>
      <button onClick={() => setFilter(FilterState.Active)} disabled={currentFilter === FilterState.Active}>
        active
      </button>
      <button onClick={() => setFilter(FilterState.Completed)} disabled={currentFilter === FilterState.Completed}>
        completed
      </button>
    </div>
  );
};

export default TasksFilterButtons;