import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiList : [],
};

export const reducerSlice = createSlice({
  name: "apiList",
  initialState,
  reducers: {
    getList : (state: any, action) => {
      state.apiList = action.payload;
    },
  },
});

export const { getList } = reducerSlice.actions;
export const getlist = (state: any) => state.apiList.apiList;

export default reducerSlice.reducer;