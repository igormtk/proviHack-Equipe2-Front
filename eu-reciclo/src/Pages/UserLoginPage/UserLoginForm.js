import React from "react";
import useFormHook from "../../Hooks/useFormHook";
import {StyledInput} from "../../Components/Input/style.js";
import PrimaryButton from "../../Components/PrimaryButton";
import { UseLogin } from "../../Contexts/loginContext";

const UserLoginForm = () => {
  const { form, handleInputOnChange } = useFormHook({ email: "", password: "" });

  const { logIn } = UseLogin();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    logIn(form);
  };

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <StyledInput
          name="email"
          value={form.email}
          onChange={handleInputOnChange}
          label="email"
          placeholder="email@email.com"
          type="email"
          variant="outlined"
          fullWidth
          required
        />

        <StyledInput
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

        <PrimaryButton type="submit">Entrar</PrimaryButton>
      </form>
    </div>
  );
};

export default UserLoginForm;
