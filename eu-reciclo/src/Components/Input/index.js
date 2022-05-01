import { StyledInput } from "./style";

const InputField = ({ register, name, ...rest }) => {
  return <StyledInput {...register(name)} {...rest} />;
};

export default InputField;
