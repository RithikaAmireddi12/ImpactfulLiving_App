import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete} 
          onDeleteTask={onDeleteTask}  {/* Pass onDeleteTask here */}
        />
      ))}
    </ul>
  );
};

export default TaskList;
