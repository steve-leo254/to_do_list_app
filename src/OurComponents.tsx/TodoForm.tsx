// TodoForm.tsx
import React, { useState } from "react";

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

export default TodoForm;