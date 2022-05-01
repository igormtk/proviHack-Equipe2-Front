import React from "react"
import UserSignUpForm from "./UserSignUpForm";
import { Container, SignUpContainer } from "./UserSingUpFormStyle";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer";

const UserSignUpPage = () => { 

    return (
        <Container>

        <SignUpContainer>

            <UserSignUpForm/>

        </SignUpContainer>

        <Footer/>

        </Container>
    );
}

export default UserSignUpPage
