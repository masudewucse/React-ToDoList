import React from "react";
import { ToDoItem } from "./ToDoItem";
import { Button, Card, ListGroup } from "react-bootstrap";

interface TodoProps {
  items: Array<ToDoItemProp>;
  selectedItem: selectedItemToDoType;
  deleteItem: selectedItemDelete;
}

export const ToDoListItems: React.FC<TodoProps> = ({
  items,
  selectedItem,
  deleteItem,
}) => {
  return (
    <ListGroup variant="flush">
      {items.map((item) => {
        return (
          <ToDoItem
            prop={item}
            checkUnceck={selectedItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </ListGroup>
  );
};
