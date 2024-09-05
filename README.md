# Task Management App

This is a simple task management app built using **React**. The app allows users to add tasks, mark them as complete, and delete them. The tasks are categorized based on the effort and impact using a matrix system. 

## Table of Contents
- [Features](#features)
- [Project Setup](#project-setup)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [Front-End and Back-End Interaction](#front-end-and-back-end-interaction)
- [Best Practices](#best-practices)

---

## Features

- Add new tasks with task names
- Mark tasks as completed (strikethrough effect for completed tasks)
- Delete tasks from the list
- Tasks are visually displayed in a matrix layout based on effort/impact
- Responsive and clean UI with a focus on usability

---

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RithikaAmireddi12/task-management-app.git


   Navigate into the project directory:
   cd task-management-app

Install dependencies:
npm install

Run the app:
npm start

Component Structure

The project is organized into the following components:

App.js: The main component that brings together all other components. This is the root of the application.
Header.js: Contains the header of the application, which includes the app name and styled title.
TaskForm.js: The form where users can add new tasks. It includes validation and error handling.
Matrix.js: The primary component that holds the logic for categorizing tasks into four quadrants: Quick Wins, Big Projects, Fill-In Jobs, and Thankless Tasks.
TaskItem.js: Represents individual tasks, including the ability to mark tasks as complete or delete them.
TaskList.js: Renders a list of tasks, mapping over the array of tasks passed to it.
The components are kept modular to ensure reusability, maintainability, and separation of concerns.

State Management

State is primarily managed using React's built-in hooks (useState and useReducer), enabling components to share and update data.

App.js maintains the primary state for the list of tasks.
Matrix.js filters and categorizes tasks using the state passed down as props.
TaskItem.js and TaskList.js handle task completion toggles and deletions by lifting state changes up to the parent components.
State is passed between components using props, and any task update or deletion propagates back to the parent (App.js) where the state is updated. We use lifting state up to pass shared data between the child components.

Best Practices and Code Comments

The code is structured to be modular, reusable, and follows separation of concerns.
State management is handled efficiently using hooks.
Components are broken down into small, manageable pieces, improving readability.
CSS files are split by component (e.g., Header.css, TaskForm.css), following the principle of scoped styles.
Each component includes necessary comments to explain logic, particularly in complex areas like state handling and form validation.
