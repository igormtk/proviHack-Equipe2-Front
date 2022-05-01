import { BlueStyledButton, StyledButton } from "./style";

const PrimaryButton = ({ green = true, children, ...rest }) => {
  return (
    <>
      {green ? (
        <StyledButton {...rest}>{children}</StyledButton>
      ) : (
        <BlueStyledButton {...rest}>{children}</BlueStyledButton>
      )}
    </>
  );
};

export default PrimaryButton;
