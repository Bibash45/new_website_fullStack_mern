import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; //1 day

      localStorage.setItem("expirationTime", expirationTime);
    },
    flogout: (state, action) => {
      state.userInfo = null;
      // localStorage.removeItem("userInfo");
      // localStorage.removeItem("expirationTime");
      localStorage.clear();
    },
  },
});

export const { setCredentials, flogout } = authSlice.actions;
export default authSlice.reducer;
