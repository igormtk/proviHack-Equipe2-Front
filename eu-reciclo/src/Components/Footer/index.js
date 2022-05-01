import { Container } from "./styles";
import provi from "../../Assets/Img/provi.png";

const Footer = () => {
  return (
    <Container id="footer">
      <div>
        <img src={provi} alt="Logo da ProviHack" />
        <p>equipe: 02 projeto: eu reciclo!</p>
      </div>
    </Container>
  );
};

export default Footer;
