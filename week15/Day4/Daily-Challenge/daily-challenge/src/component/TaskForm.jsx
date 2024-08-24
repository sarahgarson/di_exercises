import React, { useState } from "react";
import { useTask } from "../component/TaskContext";

function TaskForm() {
  const { dispatch } = useTask();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch({ type: "addTask", payload: text });
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;