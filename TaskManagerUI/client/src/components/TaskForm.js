// src/components/TaskForm.js
import React, { useState } from "react";
import { createTask } from "../services/taskService";
import "./TaskForm.css"; // Import the CSS

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, isCompleted: false });
    setTitle("");
    onTaskCreated();
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="task-input"
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>
    </div>
  );
}
