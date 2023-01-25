import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";

export const ReduxState = configureStore({
  reducer: {
    reduxState: Slices,
  },
});
