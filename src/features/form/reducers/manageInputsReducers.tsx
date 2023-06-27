import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputs: { name: "", surname: "", email: "", dataA: "", dataB: "" },
};

const updateInputsSlice = createSlice({
  name: "updateInputs",
  initialState,
  reducers: {
    changeInput: (state, action) => {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value,
        },
      };
    },
    clearInputs: (state) => {
      return {
        ...state,
        inputs: { name: "", surname: "", email: "", dataA: "", dataB: "" },
      };
    },
  },
});

export const { actions, reducer } = updateInputsSlice;
