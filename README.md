# Task Scheduler App

Task is a simple React app for managing your tasks. It includes features such as adding new tasks, viewing all tasks, and editing existing tasks.

## How to Run the App

1. Clone the repository:

   ```bash
   git clone https://github.com/Brainboxx/task.git
   
2. Navigate to the project directory:
   ```bash
   cd task
   
3. Install Dependencies
   ```bash
   npm install

4. Start development server
   ```bash
   npm start

5. Open your browser and go to http://localhost:3000 to view the app.

   Make sure the backend server is running before starting the React app.

   # Dummy Backend with json-server
1. The app uses json-server as a dummy backend for handling tasks. Make sure to have json-server installed globally:
   ```bash
     npm install -g json-server
   
2. To start the json-server, run the following command in a separate terminal window:
    ```bash
      json-server --watch data/db.json --port 8000

  # Dependencies
  - React: A JavaScript library for building user interfaces.
  - react-router-dom: Declarative routing for React.js.
  - axios: Promise-based HTTP client for the browser and Node.js.
  - json-server: A simple, zero-config JSON file-based server for development.
  - Tailwind CSS: A utility-first CSS framework.

  # Design Choices
  - React: Chosen for its component-based architecture, making it easy to manage and reuse UI components.
  - react-router-dom: Used for client-side routing, allowing navigation between different views in a single-page application.
  - axios: Used for making HTTP requests to the dummy backend.
  - json-server: Used as a lightweight and easy-to-set-up dummy backend for simulating API responses during development.
  - Responsive Design: Implemented responsive design using media queries to ensure a good user experience on various devices.
  - Tailwind CSS: Chosen for its utility-first approach, making it easy to style components and achieve a consistent design. It is also highly customizable and integrates well with React.

   

   
