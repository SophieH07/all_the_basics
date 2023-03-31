import React from "react";
import TodoGroup from "./components/TodoGroup";
import "./TodoApp.css";

const TodoList = () => {
  return (
    <>
      <p>TodoList</p>
      <div className="todo-groups">
        <TodoGroup />
      </div>
    </>
  );
};

export default TodoList;
