import store from "../store/store";

import { actions as chartActions } from "../features/chart/reducers/updateChartReducer";
import { actions as inputsActions } from "../features/form/reducers/manageInputsReducers";

export interface ActionsObject {
  [x: string]: (...args: any[]) => any;
}

export const bindActionsToDispatch = <T extends ActionsObject>(
  dispatch: Function,
  actions: T
) => {
  return Object.keys(actions).reduce(
    (boundActions, key) => {
      boundActions[key as keyof T] = (...args: Parameters<T[keyof T]>) => {
        dispatch(actions[key as keyof T](...args));
      };

      return boundActions;
    },
    {} as {
      [K in keyof T]: (...args: Parameters<T[K]>) => void;
    }
  );
};

export const boundInputActions = bindActionsToDispatch(
  store.dispatch,
  inputsActions
);

export const boundChartActions = bindActionsToDispatch(
  store.dispatch,
  chartActions
);
