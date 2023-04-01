import TodoItem from "./TodoItem";
import "../TodoList.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoGroup = () => {
  return (
    <div className="group">
      <div className="group-title">
        TodoGroup
        <button>
          <RiDeleteBin5Line />
        </button>
      </div>
      <TodoItem />
    </div>
  );
};

export default TodoGroup;
