import React from "react";
import Component2 from "./Component2";
import { useState } from "react";
import useDataContextProvider from "../context/DataContext";

function Component1() {
  const [name, setName] = useState("");
  const { setUsernameWrapper } = useDataContextProvider();

  const onChangePropogateUsername = (e) => {
    e.preventDefault();
    setUsernameWrapper(name);
  };
  return (
    <>
      <h1>This is Component 1</h1>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <button onClick={onChangePropogateUsername}>Click</button>
      <Component2 />
    </>
  );
}

export default Component1;
