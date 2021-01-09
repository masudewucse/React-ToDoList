import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

interface ToDoFormProps {
  callback: newTodoType;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ callback }) => {
  const [todoItem, setToDoItem] = useState<string>("");

  const createToDoList = () => {
    if (todoItem) callback(todoItem);
    setToDoItem("");
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          placeholder="What to do next?"
          value={todoItem}
          onChange={(e) => setToDoItem(e.currentTarget.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={createToDoList}>
            Create
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};
