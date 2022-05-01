import React from "react";
import useForm from "../../Hooks/useForm";
import InputField from "../../Components/Input";
import PrimaryButton from "../../Components/PrimaryButton";
import { UseLogin } from "../../Contexts/loginContext";

const UserLoginForm = () => {
  const { form, handleInputOnChange } = useForm({ email: "", password: "" });

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
      </form>
    </div>
  );
};

export default UserLoginForm;
