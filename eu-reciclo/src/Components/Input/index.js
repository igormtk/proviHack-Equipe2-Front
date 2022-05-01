import { StyledInput } from "./style";

const InputField = ({ register = null, name = "", ...rest }) => {
  return !!register ? (
    <StyledInput {...register(name)} {...rest} />
  ) : (
    <StyledInput {...rest} />
  );
};

export default InputField;
