import React from "react";
import UserLoginForm from "./UserLoginForm";
import { Link } from "react-router-dom";
import { Container, LeftContainer, PageContainer, RightContainer } from "./UserLoginPageStyle";
import recicle from "../../Assets/Img/recicle.png";
import Footer from "../../Components/Footer";

const UserLoginPage = () => {

  return (
    <PageContainer>
      <Container>
        <LeftContainer>
          <h1>EU RECICLO!</h1>
          <img src={recicle} alt="Recicle!" />
        </LeftContainer>

        <RightContainer>
          <UserLoginForm />
          <span>
            Cadastre-se <Link to="/signup/user">aqui</Link>
          </span>
        </RightContainer>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default UserLoginPage;
