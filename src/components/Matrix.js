import React from 'react';
import TaskItem from './TaskItem';
import Questionnaire from './Questionnaire';
import './Matrix.css';

const Matrix = ({ tasks, onToggleComplete, onDeleteTask, onCategorizeTask }) => {
    console.log('All tasks in Matrix:', tasks);

    const quadrants = [
        { title: 'Quick Wins', className: 'quick-wins', filter: task => task.urgent && !task.important },
        { title: 'Big Projects', className: 'big-projects', filter: task => task.urgent && task.important },
        { title: 'Fill-In Jobs', className: 'fill-in-jobs', filter: task => !task.urgent && !task.important },
        { title: 'Thankless Tasks', className: 'thankless-tasks', filter: task => !task.urgent && task.important },
    ];

    const uncategorizedTasks = tasks.filter(task => task.urgent === undefined || task.important === undefined);
    const categorizedTasks = tasks.filter(task => task.urgent !== undefined && task.important !== undefined);

    return (
        <div className="matrix-container">
            <div>
                {uncategorizedTasks.length > 0 && (
                    <div className="uncategorized-tasks">
                        <h3>Uncategorized Tasks</h3>
                        <ul>
                            {uncategorizedTasks.map(task => (
                                <li key={task.id}>
                                    <TaskItem 
                                        task={task} 
                                        onToggleComplete={onToggleComplete}
                                        onDeleteTask={onDeleteTask}
                                    />
                                    <Questionnaire task={task} onComplete={onCategorizeTask} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="matrix">
                    {quadrants.map((quadrant, index) => (
                        <div key={index} className={`quadrant ${quadrant.className}`}>
                            <h3>{quadrant.title}</h3>
                            <ul>
                                {categorizedTasks.filter(quadrant.filter).map(task => (
                                    <li key={task.id}>
                                        <TaskItem 
                                            task={task} 
                                            onToggleComplete={onToggleComplete}
                                            onDeleteTask={onDeleteTask}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Matrix;

