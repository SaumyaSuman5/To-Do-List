import React, { useState } from "react";
function ToDoItem(props) {
  const [isDone, setIsDone] = useState("");
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : null }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;