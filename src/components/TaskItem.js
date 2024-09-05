import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  console.log('Rendering TaskItem:', task);

  const handleToggle = (e) => {
    e.stopPropagation();
    console.log('Toggle clicked for task:', task.id);
    onToggleComplete(task.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log('Delete clicked for task:', task.id);
    onDeleteTask(task.id);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
