import React from "react";
import { ButtonBox, Container, PageContainer, MapContainer } from "./style";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import MapLeaflet from "../../Components/Map/Map";
import SecondaryButton from "../../Components/SecondaryButton";

const SearchAssociations = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header />
      <Container>
        <ButtonBox>
          <SecondaryButton onClick={() => navigate("/user/request")}>
            Solicitar Coleta
          </SecondaryButton>
          <SecondaryButton
            green={false}
            onClick={() => console.log("buscar associações aqui")}
          >
            Buscar Associações
          </SecondaryButton>
        </ButtonBox>
        <MapContainer>{MapLeaflet()}</MapContainer>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default SearchAssociations;
