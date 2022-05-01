import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import InputField from "../../Components/Input";
import PrimaryButton from "../../Components/PrimaryButton";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

const UserLoginForm = () => {
  const { form, handleInputOnChange } = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    //LoginUser(form, navigate); colocar a função de logar aqui, esperando API
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
      </form>
    </div>
  );
};

export default UserLoginForm;
