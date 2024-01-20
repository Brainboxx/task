import Navbar from './Navbar';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddTask from './AddTask';
import EditTask from './EditTask';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div className="content">
            <Routes>
              <Route element={<Dashboard />} path="/" exact/>
              <Route element={<AddTask />} path="/create"/>
              <Route element={<EditTask />} path="/edit/:id"/>
            </Routes>
          </div> 
      </Router>
    </div>
  );
}

export default App;
