import './index.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Task Management Dashboard</h1>
        <div className="links">
            <a href="/">All tasks</a>
            <a href="/create">Add new task</a>
        </div>
    </nav>
  )
}

export default Navbar