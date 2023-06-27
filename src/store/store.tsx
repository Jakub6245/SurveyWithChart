// import reducer from "../reducer/Reducer";
import {
  Middleware,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import localStorageKey from "../config/localStorageKey";
import { reducer as updateChartReducer } from "../features/chart/reducers/updateChartReducer";
import { reducer as manageInputsReducer } from "../features/form/reducers/manageInputsReducers";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  localStorage.setItem(localStorageKey, JSON.stringify(store.getState()));

  return result;
};

const persistedState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey)!)
  : {};

// configureStore
const store = configureStore({
  reducer: {
    data: updateChartReducer,
    inputs: manageInputsReducer,
  },
  middleware: [...getDefaultMiddleware(), localStorageMiddleware],
  preloadedState: persistedState,
});

export default store;
