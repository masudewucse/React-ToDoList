import React, { useState, useEffect } from "react";
import { ToDoItem } from "./Components/ToDoItem";
import { ToDoListItems } from "./Components/ToDoListItems";
import { ToDoForm } from "./Components/ToDoForm";
import { Button, Card } from "react-bootstrap";

function App() {
  const [value, setValue] = useState<string>("");
  const [todo, setTodo] = useState<ToDoItemProp[]>([]);

  const checkUncheck: selectedItemToDoType = (selectedItem) => {
    console.log(selectedItem);
    const newList = todo.map((item) => {
      if (item === selectedItem) {
        return {
          ...item,
          finished: !item.finished,
        };
      }
      return item;
    });
    setTodo(newList);
  };

  const deleteSelectedItem: selectedItemDelete = (deleteItem) => {
    const newListw = todo.filter((item) => item != deleteItem);
    setTodo(newListw);
  };

  const addToDoItemToList: newTodoType = (newToDo) => {
    setTodo([...todo, { title: newToDo, finished: false }]);
  };

  useEffect(() => {
    //console.log(todo);
  }, [todo]);

  return (
    <Card className="text-center">
      <Card.Header><b>TODOs</b></Card.Header>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Card.Body>
              <ToDoForm callback={addToDoItemToList} />
              <ul>
                <ToDoListItems
                  items={todo}
                  selectedItem={checkUncheck}
                  deleteItem={deleteSelectedItem}
                />
              </ul>
            </Card.Body>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </Card>
  );
}

export default App;
