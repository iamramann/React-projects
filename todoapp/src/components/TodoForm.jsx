import { useState } from "react";
import { UseTodoContext } from "../context";

export function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = UseTodoContext();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ isCompleted: false, todo });
    setTodo("");
  };

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={add}
      >
        Add
      </button>
    </form>
  );
}
