import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const EditTask = () => {
    const {id} = useParams();
    const [editedTask, setEditedTask] = useState({
        id: id,
        title: '',
        description: '',
        due_date: '',
        status: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEditedTask({
            ...editedTask, 
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put('http://localhost:8000/tasks/' + id, editedTask)
        .then(res => {
          setEditedTask(res.data); // Update state with server response
          navigate('/');
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
      axios.get('http://localhost:8000/tasks/' + id)
        .then(response => {
          setEditedTask(response.data); // Prepopulate fields
        })
        .catch(err => console.log(err));
    }, [id]);


  return (
    <div className="edit">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedTask.title}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedTask.description}
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="due_date">Due Date:</label>
          <input
            type="date"
            id="due_date"
            name="due_date"
            value={editedTask.due_date}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={editedTask.status}
            required
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  )
};

export default EditTask