// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../services/taskService";

export default function TaskList({ refresh }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await updateTask(task.id, { ...task, isCompleted: !task.isCompleted });
    fetchTasks();
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task)}
            />
            {task.title} 
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}