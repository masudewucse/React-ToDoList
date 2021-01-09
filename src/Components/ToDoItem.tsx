import React from "react";
import "./ToDoItem.css";
import { Button, ListGroup } from "react-bootstrap";

interface ToDoProps {
  prop: ToDoItemProp;
  checkUnceck: selectedItemToDoType;
  deleteItem: selectedItemDelete;
}

export const ToDoItem: React.FC<ToDoProps> = ({
  prop,
  checkUnceck,
  deleteItem,
}) => {
  return (
    <ListGroup.Item key={prop.title}>
      <label>
        <input
          type="checkbox"
          checked={prop.finished ? true : false}
          onChange={() => checkUnceck(prop)}
        />
        &nbsp;
        <span className={prop.finished ? "strikethrough" : ""}>
          {prop.title}
        </span>
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => deleteItem(prop)}>X</button>
    </ListGroup.Item>
  );
};
