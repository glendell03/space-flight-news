import { configureStore } from "@reduxjs/toolkit";
import user from "@features/auth/userSlice";

export default configureStore({
  reducer: { auth: user },
});
