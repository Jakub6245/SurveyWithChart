import { useSelector } from "react-redux";
import Input from "../features/form/components/FormInput";
import {
  boundChartActions,
  boundInputActions,
} from "../hooks/useBindActionsToDispatch";

import { TInputInitialState } from "../features/form/types/StateTypeInput";
import { FormEvent } from "react";

export const Form = () => {
  const inputs = useSelector(
    (state: TInputInitialState) => state.inputs.inputs
  );
  const checkValidation = Object.values(inputs).every((el) => el !== "");

  const dataInputsArr = [inputs.dataA, inputs.dataB];

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (checkValidation) {
      boundChartActions.addOrUpdateProperty({ name: dataInputsArr });
      boundInputActions.clearInputs();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Input name="name" />
      <Input name="surname" />
      <Input name="email" />
      <Input name="dataA" />
      <Input name="dataB" />
      <input type="submit" />
      {!checkValidation && "fill all fields"}
    </form>
  );
};
