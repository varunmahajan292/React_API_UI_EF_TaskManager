// src/App.js
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={triggerRefresh} />
      <TaskList refresh={refresh} />
    </div>
  );
}

export default App;