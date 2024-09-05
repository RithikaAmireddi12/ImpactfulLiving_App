import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
            addTask({
                id: Date.now(),
                name: taskName,
                completed: false
            });
            setTaskName('');
            setError(''); // Clear error after successful submission
        } else {
            setError('Please enter a valid task name.');
        }
    };

    return (
        <div className="task-form-container">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={`task-input ${error ? 'error-border' : ''}`}
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name"
                />
                {error && <p className="error">{error}</p>}
                <button type="submit" disabled={!taskName.trim()}>Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;

