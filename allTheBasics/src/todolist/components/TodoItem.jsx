import { RiDeleteBin5Line } from "react-icons/ri";

const TodoItem = () => {
  return (
    <>
      <div className="todo">
        <button>
          <RiDeleteBin5Line />
        </button>
        <label>TodoItem well well well</label>
        <input type="checkbox" />
      </div>
      <div className="todo">
        <button>
          <RiDeleteBin5Line />
        </button>
        <label>TodoItem well well well</label>
        <input type="checkbox" />
      </div>
    </>
  );
};

export default TodoItem;
