import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedScreen: 0,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    changeScreen: (state, { payload }) => {
      console.log({ payload });
      state.selectedScreen = payload;
    },
  },
});

export const { changeScreen } = appSlice.actions;

export default appSlice.reducer;
