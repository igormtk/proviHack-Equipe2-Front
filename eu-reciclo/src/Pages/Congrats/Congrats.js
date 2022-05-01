import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import provi2 from "../../Assets/Img/provi2.png";
import { Container, Provi } from "./CongratsPageStyle";

const Congrats = () => {
  return (
    <>
      <Container>
        <Header />
        <Provi src={provi2} alt="provi/hack do agora" />
        <Footer />
      </Container>
    </>
  );
};

export default Congrats;
