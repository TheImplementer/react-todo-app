import React, { ChangeEvent } from 'react';
import './App.css';
import Header from './Header';
import ToDoList from './ToDoList';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <ToDoList />
    </div>
  );
};

export default App;
