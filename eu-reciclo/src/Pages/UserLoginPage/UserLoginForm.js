import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import InputField from "../../Components/Input";
import PrimaryButton from "../../Components/PrimaryButton";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { UseLogin } from "../../Contexts/loginContext";


const UserLoginForm = () => {
  const { form, handleInputOnChange } = useForm({ email: "", password: "" });

  const navigate = useNavigate();


  const onSubmitLogin = (event) => {
    event.preventDefault();
    //LoginUser(form, navigate); colocar a função de logar aqui, esperando API

  const { logIn } = UseLogin();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    logIn(form);

  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <InputField
          name="email"
          value={form.email}
          onChange={handleInputOnChange}
          label="login"
          placeholder="email@email.com"
          type="email"
          variant="outlined"
          fullWidth
          required
        />

        <InputField
          name="password"
          value={form.password}
          onChange={handleInputOnChange}
          label="senha"
          placeholder={"Mínimo 6 caracters"}
          type="password"
          variant="outlined"
          fullWidth
          required
        />

        <PrimaryButton type="submit">Próximo</PrimaryButton>

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
          color={"primary"}
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

        <Button fullWidth variant="contained" type="submit" color="success">
          <p>Entrar</p>
        </Button>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Aceito enviar meus dados para o processo de coleta seletiva"
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default UserLoginForm;
