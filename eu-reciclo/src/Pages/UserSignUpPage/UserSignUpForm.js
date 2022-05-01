import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useUserContext } from "../../Contexts/userContext";

const UserSignUpForm = () => {
  const { form, handleInputOnChange } = useForm({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const { registerUser } = useUserContext();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    delete form.confirmPassword;
    console.log(form);
    registerUser(form);
  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <TextField
          name={"name"}
          value={form.name}
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
          name={"phone"}
          value={form.phone}
          onChange={handleInputOnChange}
          label={"Celular"}
          placeholder={" DDD XXXX XXXX"}
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

        <Button fullWidth variant="contained" type="submit" color="success">
          <p>CADASTRAR</p>
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

export default UserSignUpForm;
