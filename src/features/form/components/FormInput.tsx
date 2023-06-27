import { useSelector } from "react-redux";
import { TInputInitialState } from "../types/StateTypeInput";
import { boundInputActions } from "../../../hooks/useBindActionsToDispatch";

const Input: React.FC<{ name: string }> = ({ name }) => {
  const state = useSelector((state: TInputInitialState) => state.inputs.inputs);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(state);
    const value = e.target.value;
    const name = e.target.name;
    boundInputActions.changeInput({ name, value });
  };

  return (
    <>
      <input
        value={state[name as keyof TInputInitialState["inputs"]["inputs"]]}
        type="text"
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
