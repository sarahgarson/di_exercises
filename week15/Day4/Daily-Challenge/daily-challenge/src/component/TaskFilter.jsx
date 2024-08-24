import React from "react";
import { useTask } from "../component/TaskContext";

function TaskFilter() {

  const { state, dispatch } = useTask();

  return (

    <div>

      <button
        onClick={() => dispatch({ type: "setFilter", payload: "all" })}
        className={state.filter === "all" ? "active" : ""}
      >
        All
      </button>


      <button
        onClick={() => dispatch({ type: "setFilter", payload: "active" })}
        className={state.filter === "active" ? "active" : ""}
      >
        Active
      </button>


      <button
        onClick={() => dispatch({ type: "setFilter", payload: "completed" })}
        className={state.filter === "completed" ? "active" : ""}
      >
        Completed
      </button>

    </div>

  );
}
export default TaskFilter;