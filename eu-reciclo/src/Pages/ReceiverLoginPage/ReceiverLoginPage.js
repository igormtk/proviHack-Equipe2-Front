import React from "react"
import { Button } from "@mui/material"
import ReceiverLoginForm from "./ReceiverLoginForm"
import { useNavigate } from "react-router-dom"

const ReceiverLoginPage = () => { 
    let navigate = useNavigate()

    return (
        <div>

        <h1>LOGIN POSTO DE COLETA</h1>

        <ReceiverLoginForm/>
        
        <h3>Ainda não possui conta?</h3>
        
        <Button 
            fullWidth 
            variant="contained" 
            type="submit" 
            onClick={() => navigate("/signup/receiver")}
            color="primary">
            <p>CADASTRAR</p>
        </Button>

        </div>
    );
}

export default ReceiverLoginPage