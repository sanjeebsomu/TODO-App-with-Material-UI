import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="mainDiv">
      <div className="centerDiv">
        <h1>ToDo List</h1>
        <input type="text" name="" id="" placeholder='Add an Item'/>
        <Button variant="contained"><AddIcon /></Button>
      </div>
    </div>
  );
}

export default App;
