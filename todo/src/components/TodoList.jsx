import React from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TodoList = ({todos, id}) => {
  return (
    <>
        <HighlightOffIcon />
        <li style={{ listStyle: "none" }}>
          {id + 1} {/* this is for starting index number from 1 */}
          {":- "}
          {todos}
        </li>
    </>
  );
};

export default TodoList;
