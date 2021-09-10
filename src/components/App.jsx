import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
function App() {
  const [task, addTask] = useState("");
  const [item, addItem] = useState([]);

  function add(event) {
    const newValue = event.target.value;
    addTask(newValue);
  }
  function final() {
    addItem((prevItems) => {
      return [...prevItems, task];
    });
    addTask(" ");
  }
  function deleteall() {
    addTask("");
    addItem([]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={add} value={task} />
        <button onClick={final}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem) => (
            <ToDoItem text={todoitem} />
          ))}
        </ul>
      </div>
      <button onClick={deleteall}>
        <span>Clear All</span>
      </button>
    </div>
  );
}

export default App;

