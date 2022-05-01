import styled from 'styled-components';

export const PageContainer = styled.div``;

export const Container = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    width: 100%;
    height: 60vh;
  }

  @media screen and (min-height: 670px) {
    .leaflet-container {
      height: 70vh;
    }
  }
`;
