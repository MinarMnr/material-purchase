// import { configureStore } from "@reduxjs/toolkit";
// import ApiReducer from "./apiSlice";

// export default configureStore({
//   reducer: {
//     api: ApiReducer,
//   },
// });

// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Auth slice for login state management
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const selectApi = (state) => state.auth;
export default store;
