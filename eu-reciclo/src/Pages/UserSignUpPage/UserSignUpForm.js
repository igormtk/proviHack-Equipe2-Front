import React from "react";
import useFormHook from "../../Hooks/useFormHook";
import { TextField } from "@mui/material";
import { useUserContext } from "../../Contexts/userContext";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm} from "react-hook-form"
import PrimaryButton from "../../Components/PrimaryButton";
import InputField from "../../Components/Input";

const UserSignUpForm = () => {
  const { form, handleInputOnChange } = useFormHook({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const signUpSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required().email(),
    phone: yup.string().required().min(11, "O telefone deve possuir 11 digitos").max(11, "O telefone deve possuir 11 digitos"),
    cpf: yup.string().required().min(11, "O CPF deve possuir 11 digitos").max(11, "O CPF deve possuir 11 digitos"),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().min(6)
  })

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(signUpSchema)})

  const { registerUser } = useUserContext();

  const onSubmitLogin = (signUpSchema) => {
    delete signUpSchema.confirmPassword;
    console.log(signUpSchema);
    registerUser(signUpSchema);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <InputField
          name={"name"}
          onChange={handleInputOnChange}
          label={"Nome Completo"}
          placeholder="Nome Sobrenome"
          type={"text"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          helperText = {errors.name?.message}
          {...register("name")}
        />

        <InputField
          name={"email"}
          onChange={handleInputOnChange}
          label={"E-mail"}
          placeholder="email@email.com"
          type={"email"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          helperText = {errors.email?.message}
          {...register("email")}
        />

        <InputField
          name={"phone"}
          onChange={handleInputOnChange}
          label={"Celular"}
          placeholder={"DDDXXXXXXXX"}
          type={"text"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          helperText = {errors.phone?.message}
          {...register("phone")}
        />

        <InputField
          name={"cpf"}
          onChange={handleInputOnChange}
          label={"CPF"}
          placeholder="99999999999"
          type={"text"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          helperText = {errors.cpf?.message}
          {...register("cpf")}
        />

        <InputField
          name={"password"}
          onChange={handleInputOnChange}
          label={"Senha"}
          placeholder={"Mínimo 6 caracters"}
          type={"password"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          helperText = {errors.password?.message}
          {...register("password")}
        />

        <InputField
          name={"confirmPassword"}
          onChange={handleInputOnChange}
          label={"Confirme sua senha"}
          placeholder={"Mínimo 6 caracters"}
          type={"password"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          helperText = {errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

      <PrimaryButton type="submit">CADASTRAR!</PrimaryButton>

      </form>
    </div>
  );
};

export default UserSignUpForm;
