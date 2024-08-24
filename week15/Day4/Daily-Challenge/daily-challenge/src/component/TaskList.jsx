import React, {useRef, useState} from "react";
import { useTask } from "../component/TaskContext";

function TaskList() {
  const { state, dispatch } = useTask();
  const[editingId, setEditingId] = useState(null);
  const editInputRef = useRef();

 const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "all") {
      return true;
    } else if (state.filter === "completed") {
      return task.completed;
    } else if (state.filter === "active") {
      return !task.completed;
    }
  });

  const handleEdit = (id,text) => {
    setEditingId(id);
    setTimeout(() => {
      if (editInputRef.current) {
        editInputRef.current.focus();
        editInputRef.current.value = text;

      }
  }, 0);
  };

  const handleEditSumit = (id) => {
    const newText = editInputRef.current.value;
    if (newText.trim) {
      dispatch({ type: "editTask", payload: { id, text: newText } });
      setEditingId(null);
    }
  };

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          {editingId === task.id ? (
          <input
           ref={editInputRef}
           onBlur={() => handleEditSumit(task.id)}
           onClick={(e) => {
            if (e.key === 'Enter') 
            handleEditSumit(task.id);
           }}
          />
          ) : (
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: "toggleTask", payload: task.id })}
            />
            
          )}

           <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}> {task.text} </span>

          <button
            onClick={() => handleEdit(task.id, task.text)}
          >
            Edit
          </button>
          
          <button
            onClick={() => dispatch({ type: "deleteTask", payload: task.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

}

export default TaskList;