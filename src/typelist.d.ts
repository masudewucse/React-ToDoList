type ToDoItemProp = {
    title: string;
    finished: boolean;
}

type selectedItemToDoType = (selectedItem: ToDoItemProp) => void;
type selectedItemDelete = (deleteItem: ToDoItemProp) => void;

type newTodoType = (newTodo: string) => void;