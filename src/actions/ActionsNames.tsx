export enum actionsNames {
  addData = "ADD_DATA",
  changeInput = "CHANGE_INPUT",
  clearInputs = "CLEAR_INPUTS",
}

export type TActions =
  | { type: actionsNames.addData; payload: { name: string } }
  | {
      type: actionsNames.changeInput;
      payload: { name: string; value: string };
    }
  | {
      type: actionsNames.clearInputs;
    };
