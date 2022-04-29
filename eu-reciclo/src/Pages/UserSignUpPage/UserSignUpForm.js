import React from "react"
import { useNavigate } from "react-router-dom"
import useForm from '../../Hooks/useForm'
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const UserSignUpForm = () => {
    const { form, handleInputOnChange } = useForm({ fullName: "", email: "", cell: "", address: "", cpf: "", password: "", confirmPassword: ""});

    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        //LoginUser(form, navigate); colocar a função de logar aqui, esperando API
    };

    return (
        <div>

        <form onSubmit={onSubmitLogin}>
       
        <TextField
            name={"fullName"}
            value={form.fullName}
            onChange={handleInputOnChange}
            label={"Nome Completo"}
            placeholder="Nome Sobrenome"
            type={"text"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
        />

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
            name={"cell"}
            value={form.cell}
            onChange={handleInputOnChange}
            label={"Celular"}
            placeholder={"(DDD) XXXX-XXXX"}
            type={"text"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
        />

        <TextField
            name={"address"}
            value={form.address}
            onChange={handleInputOnChange}
            label={"Digite seu endereço"}
            placeholder={"Rua das flores, 92"}
            type={"text"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
        />

        <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={handleInputOnChange}
            label={"CPF"}
            placeholder="XXX.XXX.XXX-XX"
            type={"text"}
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

        <TextField
            name={"confirmPassword"}
            value={form.confirmPassword}
            onChange={handleInputOnChange}
            label={"Confirme sua senha"}
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
            color="success">
            <p>CADASTRAR</p>
        </Button>

        <FormGroup>
            <FormControlLabel control={<Checkbox/>} label="Aceito enviar meus dados para o processo de coleta seletiva"  />
        </FormGroup>
      
        </form>

        </div>
    );
}

export default UserSignUpForm