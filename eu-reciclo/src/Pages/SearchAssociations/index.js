import React from "react";
import { HeaderContainer } from "../../Components/Header/HeaderStyle";
import {
  BlueStyledButton,
  ButtonBox,
  Container,
  PageContainer,
  StyledButton,
} from "./style";
import mapImage from "../../Assets/Img/map.png";
import { useNavigate } from "react-router-dom";

const SearchAssociations = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeaderContainer />
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
        <img src={mapImage} alt="exemplo do map de Vitória - ES" />
      </Container>
    </PageContainer>
  );
};

export default SearchAssociations;
