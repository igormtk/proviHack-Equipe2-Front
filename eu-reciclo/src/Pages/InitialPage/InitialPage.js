import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const InitialPage = () => {
    let navigate = useNavigate()
  
    return (<div>
            <h2>EU RECICLO</h2>

            <Button
            fullWidth 
            variant="contained" 
            type="submit" 
            onClick={() => navigate("/login/user")}
            color="success"
            >
            <p>RECICLAR</p>
            </Button>

            <p>*Solicitar coleta</p>

            <Button
            fullWidth 
            variant="contained" 
            type="submit" 
            onClick={() => navigate("/login/receiver")}
            color="primary"
            >
            <p>COLETAR</p>
            </Button>

            <p>*Cadastrar posto de coleta</p>

        </div>
    )
}

export default InitialPage