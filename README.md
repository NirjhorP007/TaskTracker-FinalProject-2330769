Task Tracker – Diploma Project

Mobile Application Programming

1. Project Overview

Task Tracker is a React-based web application developed as part of my Diploma Project in Mobile Application Programming. The application is designed to assist users in managing daily tasks by allowing them to add tasks, mark tasks as completed, and delete tasks when they are no longer required.

The primary objective of this project is to demonstrate a clear understanding of fundamental React concepts and component-based application development. The application focuses on functionality, clarity, and correctness rather than advanced user interface design.

Key concepts demonstrated in this project include:

Functional components

State management using useState

Props and event handling

List rendering using map()

Conditional rendering and styling

Additionally, the application provides real-time task statistics to help users track progress efficiently.

2. How to Run the Application
2.1 Prerequisites

Install Node.js from: https://nodejs.org

2.2 Installation and Execution

Open the project folder using a code editor such as Visual Studio Code

Install the required dependencies by running:

npm install


Start the development server:

npm run dev


Open the generated local URL (e.g., http://localhost:5173/) in a web browser to access the application

3. Application Usage

The Task Tracker application supports the following user actions:

Add Tasks: Users can enter a task name and add it to the task list

Mark Tasks as Completed: Tasks can be marked as completed, which visually distinguishes them from active tasks

Delete Tasks: Users can remove tasks from the list when they are no longer needed

View Task Statistics: The application dynamically displays the total number of tasks and the number of completed tasks

4. Project Structure
task-tracker-final-project/
├── src/
│   ├── final-project/
│   │   ├── App.jsx
│   │   └── components/
│   │       ├── Header.jsx
│   │       ├── TaskInput.jsx
│   │       ├── TaskList.jsx
│   │       ├── TaskItem.jsx
│   │       └── Footer.jsx
│   ├── main.jsx
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md


This structure follows a component-based architecture to ensure modularity, readability, and maintainability.

5. Technologies Used

React: Functional components, JSX, state management, and props

JavaScript: ES6+ syntax and features

HTML & CSS: Basic layout and conditional styling

Vite: Development and build tool

6. Conclusion

This project demonstrates the ability to design and implement a simple yet functional React application using modern front-end development practices. By focusing on core React principles and clean component structure, the Task Tracker application serves as a strong and appropriate submission for a Mobile Application Programming Diploma Project.
