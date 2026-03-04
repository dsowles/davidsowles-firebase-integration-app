import { useState } from 'react';

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Enter Task Name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm