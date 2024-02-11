import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => {
    console.log(state.todo.todos);
    return state.todo.todos;
  });
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.text}{" "}
            <button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              x
            </button>{" "}
          </li>
        );
      })}
    </>
  );
}

export default Todos;
