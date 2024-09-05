import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import Matrix from './components/Matrix';
import Header from './components/Header';
import './App.css';

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const toggleTaskComplete = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const categorizeTask = (taskId, urgent, important) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, urgent, important } : task
        ));
    };

    return (
        <div className="App">
            <Header />
            <div className="content-wrapper">
                <TaskForm addTask={addTask} />
                <div className="matrix-container">
                    <Matrix 
                        tasks={tasks} 
                        onToggleComplete={toggleTaskComplete}
                        onDeleteTask={deleteTask}
                        onCategorizeTask={categorizeTask}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
