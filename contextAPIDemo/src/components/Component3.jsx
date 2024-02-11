import React from "react";
import useDataContextProvider from "../context/DataContext";

function Component3() {
  const { username } = useDataContextProvider();
  return (
    <>
      <h1>This is component 3: {username}</h1>
    </>
  );
}

export default Component3;
