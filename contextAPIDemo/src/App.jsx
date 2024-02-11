import { useState } from "react";
import Nested from "./components/Nested";
import useDataContextProvider, {
  DataContextProvider,
} from "./context/DataContext";

function App() {
  const [username, setUsername] = useState("");

  const setUsernameWrapper = (name) => {
    setUsername(name);
  };

  return (
    <>
      <DataContextProvider value={{ username, setUsernameWrapper }}>
        <h1>This is App Component</h1>
        <Nested />
      </DataContextProvider>
    </>
  );
}

export default App;
