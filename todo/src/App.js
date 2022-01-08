import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./components/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInput = (e) => {
    let { value } = e.target; //destructering
    setNewTodo(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent default behaviour of a form
    setNewTodo(""); //clearing input field after submitting
    setTodo((oldTodo) => {
      return [...oldTodo, newTodo]; //if we do not use spread operator here then it will show only 2 todo list, one is old one and another new.
    });
  };
  return (
    <div>
      <div>
        <h1>ToDo List</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            onChange={handleInput}
            value={newTodo}
            id="todo"
            placeholder="Add an Item"
          />

          <Button
            variant="contained"
            type="submit"   //have to add type submit so it will work correctly when we enter to submit
          >
            <AddIcon />
          </Button>
        </form>
        {todo.map((todoItems, index) => { 
          return <TodoList todos={todoItems} id={index} key={index} />
        })}
      </div>
    </div>
  );
}

export default App;
