import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import './index.css'


const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [due_date, setDueDate] = useState('');
    const [status, setStatus] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {title, description, due_date, status};
        
        axios.post('http://localhost:8000/tasks', task)
        .then(res => {
            navigate('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new Task</h2>
            <form className="form-container" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            value={title}
            required
            className="form-input"
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
            required
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>
        <div>
            <label htmlFor="due_date">Due Date:</label>
            <input
            type="date"
            value={due_date}
            required
            className="form-input"
            onChange={(e) => setDueDate(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="status">Status:</label>
            <select
            value={status}
            required
            className="form-select"
            onChange={(e) => setStatus(e.target.value)}
            >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            </select>
        </div>
        <button type="submit" className="form-button">Add Task</button>
        </form>
        </div>
    )
    }

export default AddTask