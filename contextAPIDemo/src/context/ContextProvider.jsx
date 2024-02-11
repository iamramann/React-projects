import React from "react";
import context from "./context";
import { useState } from "react";

function ContextProvider({ children }) {
  const [username, setUsername] = useState("");
  return (
    <>
      <context.Provider value={{ username, setUsername }}>
        {children}
      </context.Provider>
    </>
  );
}

export default ContextProvider;
