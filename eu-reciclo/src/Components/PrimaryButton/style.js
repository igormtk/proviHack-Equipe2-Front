import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--primary-green);
  border-radius: 10px;
  border: 1px solid var(--primary-green);
  color: white;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  height: 60px;
  width: 100%;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));

  :hover,
  :active {
    background: transparent;
    color: var(--primary-green);
  }
`;

export const BlueStyledButton = styled(StyledButton)`
  background: transparent;
  border-color: #141736;
  color: #141736;

  :hover,
  :active {
    background: #141736;
    color: white;
  }
`;
