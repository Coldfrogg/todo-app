import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginSignup/Login';
import Register from './Components/LoginSignup/Register';
import ToDo from './Components/ToDo/ToDo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<ToDo />}/>
        {/* Default Route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

