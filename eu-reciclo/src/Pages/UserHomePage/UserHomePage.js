import React from "react";
import Header from "../../Components/Header/Header";
import MaterialCard from "../../Components/MaterialCards/MaterialCards";
import house from "../../Assets/Icons/house.png";
import union from "../../Assets/Icons/union.png";
import game from "../../Assets/Icons/game.png";
import glass from "../../Assets/Icons/glass.png";
import paper from "../../Assets/Icons/paper.png";
import { Chart } from "react-google-charts";
import {
  CardContainer,
  Title,
  Title2,
  InformationContainer,
  ChartContainer,
  VideoContainer,
  Container,
  ContentContainer,
  ButtonContainer,
} from "./UserHomePageStyle";
import UserChart from "../../Components/Chart/Chart";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../Components/SecondaryButton";

const UserHomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Title>Porque é importante reciclar?</Title>
        <Title2>Clique abaixo e saiba mais</Title2>

        <CardContainer>
          <MaterialCard
            link="https://www.psdovidro.com.br/descubra-tudo-sobre-a-reciclagem-de-vidro/"
            icon={glass}
            name="VIDRO"
          />

          <MaterialCard
            link="https://www.reciclasampa.com.br/artigo/historia-e-reciclagem-de-papel:-entenda-o-processo-e-como-fazer"
            icon={paper}
            name="PAPEL"
          />

          <MaterialCard
            link="https://www.ecycle.com.br/reciclagem-de-eletronicos/"
            icon={game}
            name="ELETRÔNICOS"
          />

          <MaterialCard
            link="https://www.vgresiduos.com.br/blog/o-que-fazer-com-os-entulhos-gerados-na-construcao-civil/#:~:text=Importância%20da%20reciclagem%20e%20reaproveitamento,a%20produção%20do%20lixo%20urbano."
            icon={union}
            name="ENTULHO"
          />

          <MaterialCard
            link="http://www.codeca.com.br/servicos_coletas_associacoes_de_reciclagem.php"
            icon={house}
            name="ASSOCIAÇÕES"
          />
        </CardContainer>

        <InformationContainer>
          <ChartContainer>
            <div id="chart">{UserChart()}</div>
            <ButtonContainer>
              <SecondaryButton
                fullWidth
                variant="outlined"
                type="submit"
                onClick={() => navigate("/user/request")}
              >
                Solicitar Coleta
              </SecondaryButton>

              <SecondaryButton
                green={false}
                fullWidth
                variant="outlined"
                type="submit"
                onClick={() => navigate("/user/searchAssociations")}
              >
                Buscar Associação
              </SecondaryButton>
            </ButtonContainer>
          </ChartContainer>

          <VideoContainer>
            <iframe
              width="fit-content"
              height="250px"
              src="https://www.youtube.com/embed/XVYqqv6kUow"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </InformationContainer>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default UserHomePage;
