import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInput = (e) =>{
    console.log('handle input');
    let {value} = e.target;     //destructering
    setNewTodo(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
    setTodo((oldTodo)=>{
      return [...oldTodo, newTodo]
    })
    console.log('submitted');
  }
  return (
    <div className="mainDiv">
      <div className="centerDiv">
        <h1>ToDo List</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" name="todo" onChange={handleInput} value={newTodo}  id="todo" placeholder="Add an Item" />

        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          <AddIcon />
        </Button>
        </form>
          {
            todo.map((todoItems, index)=>{
              return (
                  <li key={index} style={{listStyle: 'none'}} >{index+1}{':- '}{todoItems}</li>
              );
            })
          }
      </div>
    </div>
  );
}

export default App;
