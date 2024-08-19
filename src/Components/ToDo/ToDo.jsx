import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './ToDo.css'; 
import todo from '../Assets/todo-image.png';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/login');
  };

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []); // Empty dependency array means this useEffect only runs once when the component mounts

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Tasks saved to localStorage:', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    if (task === '') {
      alert('You must write something!');
    } else {
      setTasks([...tasks, { text: task, checked: false }]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask(event.target.value);
      event.target.value = '';
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h2>To-Do List <img src={todo} alt="Todo-Icon"/></h2>
        <div className="row">
          <input type="text" id="input-box" placeholder="Add your text" onKeyPress={handleKeyPress}/>
          <button onClick={() => addTask(document.getElementById('input-box').value)}>Add</button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
              <li
                key={index}
                className={task.checked ? 'checked' : ''}
                onClick={() => toggleTask(index)}
              >
                {task.text}
                <span onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>×</span>
              </li>
            ))}
        </ul>
        <div>
          <button className="back-button" onClick={handleBackClick}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
