import React from "react"
import Header from "../../Components/Header/Header"
import MaterialCard from "../../Components/MaterialCards/MaterialCards";
import house from "../../Assets/Icons/house.png"
import union from "../../Assets/Icons/union.png"
import game from "../../Assets/Icons/game.png"
import glass from "../../Assets/Icons/glass.png"
import paper from "../../Assets/Icons/paper.png"
import { Chart } from "react-google-charts";
import MapLeaflet from "../../Components/Map/Map";
import { CardContainer, Title, InformationContainer, ChartContainer, MapContainer, ButtonContainer, ButtonContainer2 } from "./UserHomePageStyle"
import UserChart from "../../Components/Chart/Chart"
import { Button } from "@mui/material"

const UserHomePage = () => { 
    
    return (
        <div>

        <Header/>
        
        <Title>Porque é importante reciclar?</Title>

            <CardContainer>
                
                <MaterialCard
                    link = "https://www.psdovidro.com.br/descubra-tudo-sobre-a-reciclagem-de-vidro/"
                    icon = {glass}
                    name = "VIDRO"
                />

                <MaterialCard
                    link = "https://www.reciclasampa.com.br/artigo/historia-e-reciclagem-de-papel:-entenda-o-processo-e-como-fazer"
                    icon = {paper}
                    name = "PAPEL"
                />

                <MaterialCard
                    link = "https://www.ecycle.com.br/reciclagem-de-eletronicos/"
                    icon = {game}
                    name = "ELETRÔNICOS"
                />

                <MaterialCard
                    link = "https://www.vgresiduos.com.br/blog/o-que-fazer-com-os-entulhos-gerados-na-construcao-civil/#:~:text=Importância%20da%20reciclagem%20e%20reaproveitamento,a%20produção%20do%20lixo%20urbano."
                    icon = {union}
                    name = "ENTULHO"
                />

                <MaterialCard
                    link = "http://www.codeca.com.br/servicos_coletas_associacoes_de_reciclagem.php"
                    icon = {house}
                    name = "ASSOCIAÇÕES"
                />

            </CardContainer>

            <InformationContainer>

                <ChartContainer>
                    {UserChart()}
                </ChartContainer>

                <MapContainer>

                    <h2>CONFIRA OS POSTOS DE COLETA!</h2>

                    {MapLeaflet()}

                    <ButtonContainer>

                        <ButtonContainer2>

                            <Button 
                                fullWidth 
                                variant="outlined"  
                                type="submit" 
                                color="success"
                                >
                                <p>SOLICITAR COLETA</p>
                            </Button>

                        </ButtonContainer2>

                        <ButtonContainer2>

                            <Button 
                                fullWidth 
                                variant="outlined" 
                                type="submit" 
                                color="primary"
                                >
                                <p>BUSCAR ASSOCIAÇÃO</p>
                            </Button>

                        </ButtonContainer2>

                    </ButtonContainer>

                </MapContainer>

            </InformationContainer>

        </div>
    );
}

export default UserHomePage