import { Container, LightTooltip } from "./styles";
import provi from "../../Assets/Img/provi.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container id="footer">
      <div>
        <Link to="/congrats">
          <LightTooltip title="Ir para  agradecimentos">
            <img src={provi} alt="Logo da ProviHack" />
          </LightTooltip>
        </Link>
        <p>equipe: 02 projeto: eu reciclo!</p>
      </div>
    </Container>
  );
};

export default Footer;
