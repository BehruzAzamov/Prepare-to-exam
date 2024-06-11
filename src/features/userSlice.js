import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  user: null,
  authReady: false,
  tasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    login: (state, { payload }) => {
      state.user = serializeUser(payload);
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthReady: (state) => {
      state.authReady = true;
    },
  },
});

function serializeUser(user) {
  return {
    id: user.id,
    username: user.username,
  };
}

export const { login, logout, isAuthReady } = userSlice.actions;
export default userSlice.reducer;