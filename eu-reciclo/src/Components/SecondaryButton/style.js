import styled from "styled-components";

export const StyledThinButton = styled.button`
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid var(--primary-green);
  color: var(--primary-green);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 20px;
  text-transform: capitalize;
  width: fit-content;

  :hover,
  :active {
    background-color: var(--primary-green);
    box-shadow: 2px 2px 2px 2px #d3d3d354;
    color: white;
    transform: scale(1.05);
    transition: ease all 0.5s;
  }
`;

export const StyledBlueThinButton = styled(StyledThinButton)`
  border-color: #141736;
  color: #141736;

  :hover,
  :active {
    background-color: #141736;
    color: white;
  }
`;
