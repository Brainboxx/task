import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import './index.css';

const Dashboard = () => {
    const [tasks, setTasks] = useState(null);
    const [showCompleted, setShowCompleted] = useState(false);
    const [showPending, setShowPending] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleCompleted = () => {
        setShowCompleted(!showCompleted);
        setShowPending(false);
    }

    const handlePending = () => {
        setShowPending(!showPending);
        setShowCompleted(false);
    }
    
    useEffect(() => {
      fetch('http://localhost:8000/tasks')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTasks(data);
        setIsLoading(false);
      });
    }, []);

    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
          <button
            onClick={handleCompleted}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2"
          >
            completed tasks
          </button>
          <button
            onClick={handlePending}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md"
          >
            pending tasks
          </button>
          { isLoading && <div>loading...</div>}
          {tasks && <TaskList
            tasks={tasks}
            title={getTitle()}
            showCompleted={showCompleted}
            showPending={showPending}
          />}
        </div>
      </div>
    );

    function getTitle() {
        if (showCompleted) {
          return "Completed tasks";
        } else if (showPending) {
          return "Pending tasks";
        } else {
          return "All tasks";
        }
      }
}

export default Dashboard