import React, { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";


const TaskContext = createContext();


const initialState = {
  tasks: [],
  filter: "all",
};

function taskReducer(state, action) {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks,{
          id: Date.now(),
          text: action.payload,
          completed: false
        }],
      };
    case "toggleTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "editTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
    
    case "setFilter":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}


export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTask() {
  return useContext(TaskContext);
}

