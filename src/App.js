
import React from 'react';
import './App.css';

import Header from './components/header';
import TodoList from './components/todoList';


function App() {
  
  return (
    <div className="App p-6 ">
      <Header/>
      
      <TodoList />
           
    </div>
  );

}

export default App;
