import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TDataInitialState } from "../types/StateTypeChart";
const initialState: TDataInitialState = { data: {} };

const updateChartSlice = createSlice({
  name: "updateChart",
  initialState,
  reducers: {
    addOrUpdateProperty: (state, action: PayloadAction<{ name: string[] }>) => {
      action.payload.name.map((el) => {
        if (state.data.hasOwnProperty(el)) {
          return (state.data[el] += 1);
        } else {
          return (state.data[el] = 1);
        }
      });
      return state;
    },
  },
});

export const { actions, reducer } = updateChartSlice;
