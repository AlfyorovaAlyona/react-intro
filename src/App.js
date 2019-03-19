import React from 'react';

import './App.css';
import Header from "./Header";
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

  return (
      <div className={"todo-list"}>
        <Header/>
        {todoItems}
      </div>
  )
}

export default App;
