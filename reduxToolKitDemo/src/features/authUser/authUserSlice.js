import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "auth-slice",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    makeUserLoggedIn: (state, action) => {
      console.log("Current state is ", state.isLoggedIn);
      console.log(action.payload, " Inside makeUserLoggedIn");
      state.isLoggedIn = action.payload;
      console.log("Updated state is ", state.isLoggedIn);
    },
    makeUserLoggedOut: (state, action) => {
      console.log("Current state is ", state.isLoggedIn);
      console.log(action.payload, " Inside makeUserLoggedOut");
      state.isLoggedIn = action.payload;
      console.log("Updated state is ", state.isLoggedIn);
    },
  },
});

export { authUserSlice };
export const { makeUserLoggedIn, makeUserLoggedOut } = authUserSlice.actions;
export default authUserSlice.reducer;
