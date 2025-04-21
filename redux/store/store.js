import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import contactReducer from "../features/contact/contactSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
  },
});

export default store;
