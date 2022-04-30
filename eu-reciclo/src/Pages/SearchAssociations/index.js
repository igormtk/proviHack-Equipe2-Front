import React from "react";
import {
  BlueStyledButton,
  ButtonBox,
  Container,
  PageContainer,
  StyledButton,
  MapContainer
} from "./style";
import { useNavigate } from "react-router-dom";
import MapLeaflet from "../../Components/Map/Map";
import Header from "../../Components/Header/Header";

const SearchAssociations = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header/>
      <Container>
        <ButtonBox>
          <StyledButton onClick={() => navigate("/user/request")}>
            Solicitar Coleta
          </StyledButton>
          <BlueStyledButton
            onClick={() => console.log("buscar associações aqui")}
          >
            Buscar Associações
          </BlueStyledButton>
        </ButtonBox>
        <MapContainer>
          {MapLeaflet()}
        </MapContainer>
      </Container>
    </PageContainer>
  );
};

export default SearchAssociations;
