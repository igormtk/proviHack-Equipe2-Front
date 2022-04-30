import React from "react"
import Header from "../../Components/Header/Header"
import MaterialCard from "../../Components/MaterialCards/MaterialCards";
import association from "../../Assets/iconsCard/association.png"
import brick from "../../Assets/iconsCard/brick.png"
import eletronic from "../../Assets/iconsCard/eletronic.png"
import glass from "../../Assets/iconsCard/glass.png"
import paper from "../../Assets/iconsCard/paper.png"

const UserHomePage = () => { 
    return (
        <div>

        <Header/>
        
        <h1>Porque é importante reciclar?</h1>

            <div>
                
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
                    icon = {eletronic}
                    name = "ELETRÔNICOS"
                />

                <MaterialCard
                    link = "https://www.vgresiduos.com.br/blog/o-que-fazer-com-os-entulhos-gerados-na-construcao-civil/#:~:text=Importância%20da%20reciclagem%20e%20reaproveitamento,a%20produção%20do%20lixo%20urbano."
                    icon = {brick}
                    name = "ENTULHO"
                />

                <MaterialCard
                    link = "http://www.codeca.com.br/servicos_coletas_associacoes_de_reciclagem.php"
                    icon = {association}
                    name = "ASSOCIAÇÕES"
                />

            </div>

        </div>
    );
}

export default UserHomePage