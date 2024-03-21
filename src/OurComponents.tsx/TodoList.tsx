// TodoList.tsx
import React from "react";

type TodoItem = {
  id: number;
  text: string;
};

type TodoListType = {
  todos: TodoItem[];
  removeTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListType> = ({ todos, removeTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {todo.text}
          <button
            onClick={() => removeTodo(todo.id)}
            className="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;