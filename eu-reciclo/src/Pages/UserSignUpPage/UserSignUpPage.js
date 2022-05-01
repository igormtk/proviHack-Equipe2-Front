import React from "react"
import UserSignUpForm from "./UserSignUpForm";
import { SignUpContainer } from "./UserSingUpFormStyle";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer";

const UserSignUpPage = () => { 

    return (
        <div>
        
        <Header/>

        <SignUpContainer>

            <h1>CADASTRE-SE</h1>

            <UserSignUpForm/>

        </SignUpContainer>

        <Footer/>

        </div>
    );
}

export default UserSignUpPage