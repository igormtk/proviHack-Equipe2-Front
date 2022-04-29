import React from "react"
import { Button } from "@mui/material"
import UserLoginForm from "./UserLoginForm"

const UserLoginPage = () => {

    return (
        <div>

        <h1>LOGIN USUÁRIO / EMPRESA</h1>
    
        <UserLoginForm/>

        <h3>Ainda não possui conta?</h3>

        <Button 
            fullWidth 
            variant="contained" 
            type="submit" 
            color="success">
            <p>CADASTRAR</p>
        </Button>

        </div>
    );
}

export default UserLoginPage