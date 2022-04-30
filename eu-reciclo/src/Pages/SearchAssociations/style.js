import styled from "styled-components";

export const PageContainer = styled.div``;
export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid var(--primary-green);

  color: var(--primary-green);
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding: 5px 20px;
  text-transform: capitalize;

  :hover,
  :active {
    background-color: var(--primary-green);
    box-shadow: 2px 2px 2px 2px #d3d3d354;
    color: white;
    transform: scale(1.05);
    transition: ease all 0.5s;
  }
`;
export const BlueStyledButton = styled(StyledButton)`
  border-color: #141736;
  color: #141736;

  :hover,
  :active {
    background-color: #141736;
    color: white;
  }
`;
export const MapContainer = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    width: 100%;
    height: 48vh;
  }
`;
