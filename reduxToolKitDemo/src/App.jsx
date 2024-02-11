import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import {
  makeUserLoggedIn,
  makeUserLoggedOut,
} from "./features/authUser/authUserSlice";

function App() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => {
    console.log(state);
    return state.auth.isLoggedIn;
  });
  return (
    <>
      <Todos />
      <AddTodo />
      <h2>Currently user is loggedin: {isUserLoggedIn.toString()}</h2>
      <button
        onClick={() => {
          dispatch(makeUserLoggedIn(true));
        }}
      >
        Login
      </button>{" "}
      <button
        onClick={() => {
          dispatch(makeUserLoggedOut(false));
        }}
      >
        Logout
      </button>
    </>
  );
}

export default App;
