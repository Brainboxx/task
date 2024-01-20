import { Link } from "react-router-dom";

const TaskList = ({ tasks, title, showCompleted, showPending}) => {
  const filteredTasks = tasks.filter((task) => {
    if (showCompleted && task.status === 'completed') {
      return true;
    }
    if (showPending && task.status === 'pending') {
      return true;
    }
    return !showCompleted && !showPending;
  });

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-md shadow-md mb-4 transition-transform transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
          <p className="text-gray-600 mb-2">Task description: {task.description}</p>
          <p className="text-gray-600 mb-2">Due date: {task.due_date}</p>
          <p className={`text-${task.status === 'completed' ? 'green' : 'yellow'}-600`}>
            Status: {task.status}
          </p>
          <Link
            to={`/edit/${task.id}`}
            className="text-blue-500 hover:bg-blue-200 inline-block py-1 px-2 rounded-md transition-colors duration-300"
          >
            Edit task
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
