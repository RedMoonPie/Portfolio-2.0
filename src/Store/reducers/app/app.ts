import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./app.interfaces";

export const appInitialState: AppState = {
  isLoadingAnimation: false,
};

export const appSlice = createSlice({
  initialState: appInitialState,
  name: "app",
  reducers: {
    setLoadingAnimation: (state, action: PayloadAction<boolean>) => {
      state.isLoadingAnimation = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setLoadingAnimation } = appSlice.actions;
