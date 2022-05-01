import { StyledBlueThinButton, StyledThinButton } from "./style";

const SecondaryButton = ({ green = true, children, ...rest }) => {
  return (
    <>
      {green ? (
        <StyledThinButton {...rest}>{children}</StyledThinButton>
      ) : (
        <StyledBlueThinButton {...rest}>{children}</StyledBlueThinButton>
      )}
    </>
  );
};

export default SecondaryButton;
