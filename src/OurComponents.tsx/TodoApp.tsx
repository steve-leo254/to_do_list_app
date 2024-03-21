// Todo.tsx
import React, { useState } from "react";

type TodoItem = {
  id: number;
  text: string;
};

type TodoFormType = {
  addTodo: (text: string) => void;
};

const TodoForm: React.FC<TodoFormType> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Enter new todo"
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </div>
    </form>
  );
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

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="display-4 text-center mb-4">To-Do List</h1>{" "}
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;