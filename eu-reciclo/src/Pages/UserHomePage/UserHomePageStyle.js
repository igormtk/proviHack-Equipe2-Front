import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  justify-content: space-between;

  #footer {
    align-self: baseline;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 700px) {
    flex-wrap: nowrap;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px;

  @media screen and (min-width: 700px) {
    flex-wrap: nowrap;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e5e8e8;
  border-radius: 10px;
  width: 35%;
  padding: 10px;
  height: 250px;
  min-width: 300px;
  box-shadow: -5px 5px 5px rgba(29, 140, 231, 0.45);
`;

export const ChartContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  border: 1px solid #e5e8e8;
  box-shadow: -5px 5px 5px rgba(29, 140, 231, 0.45);
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 20px;
  min-width: 300px;
  width: 30%;

  #chart {
    transform: scale(0.6);
  }

  @media screen and (min-width: 700px) {
    #chart {
      transform: scale(0.8);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--primary-green);
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 38px;
  line-height: 45px;
  margin: 20px;
`;

export const Title2 = styled.h2`
  color: gray;
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
  margin: 5px;
`;
