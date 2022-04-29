import React from "react"
import { useNavigate } from "react-router-dom"
import useForm from '../../Hooks/useForm'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ReceiverLoginForm = () => { 
    const { form, handleInputOnChange } = useForm({ email: "", password: "" });

    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        //LoginUser(form, navigate); colocar a função de logar aqui, esperando API
    };

    return (
        <div>

        <form onSubmit={onSubmitLogin}>
       
        <TextField
            name={"email"}
            value={form.email}
            onChange={handleInputOnChange}
            label={"E-mail"}
            placeholder="email@email.com"
            type={"email"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
        />
     
        <TextField
            name={"password"}
            value={form.password}
            onChange={handleInputOnChange}
            label={"Senha"}
            placeholder={"Mínimo 6 caracters"}
            type={"password"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
        />
    
        <Button 
            fullWidth 
            variant="contained" 
            type="submit" 
            color="primary">
            <p>Entrar</p>
        </Button>

        <FormGroup>
            <FormControlLabel control={<Checkbox/>} label="Aceito enviar meus dados para o processo de coleta seletiva"  />
        </FormGroup>
      
        </form>

        </div>
    );
}

export default ReceiverLoginForm