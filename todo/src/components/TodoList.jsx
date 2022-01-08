import React, {useState} from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TodoList = ({todos, id}) => {
    const [line, setLine] = useState(false)
    const remove =()=>{
        setLine(!line);
    }
  return (
    <>
        <div style={{display: 'flex'}}>
        <span onClick={remove}>
        <HighlightOffIcon />
        </span>
        <li style={{ listStyle: "none", textDecoration: line? "line-through" : "none" }}>
          {id + 1} {/* this is for starting index number from 1 */}
          {":- "}
          {todos}
        </li>
        </div>
    </>
  );
};

export default TodoList;
