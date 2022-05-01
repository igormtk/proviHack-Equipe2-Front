import React from "react";
import { useUserContext } from "../../Contexts/userContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../Components/PrimaryButton";
import InputField from "../../Components/Input";
import { CheckboxContainer, FormContainer } from "./UserSingUpFormStyle";

const UserSignUpForm = () => {
  const signUpSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório").email(),
    phone: yup
      .string()
      .required("O telefone é obrigatório")
      .min(11, "O telefone deve possuir 11 digitos")
      .max(11, "O telefone deve possuir 11 digitos"),
    cpf: yup
      .string()
      .required("O CPF é obrigatório")
      .min(11, "O CPF deve possuir 11 digitos")
      .max(11, "O CPF deve possuir 11 digitos"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confime sua senha")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const { registerUser } = useUserContext();

  const onSubmitLogin = (signUpSchema) => {
    delete signUpSchema.confirmPassword;

    registerUser(signUpSchema);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitLogin)}>
      <InputField
        name={"name"}
        label={"Nome Completo"}
        placeholder="Nome Sobrenome"
        type={"text"}
        variant={"outlined"}
        fullWidth
        margin={"dense"}
        helperText={errors.name?.message}
        register={register}
      />

      <InputField
        name={"email"}
        label={"E-mail*"}
        placeholder="email@email.com"
        type={"email"}
        variant={"outlined"}
        fullWidth
        margin={"dense"}
        helperText={errors.email?.message}
        register={register}
      />

      <InputField
        name={"phone"}
        label={"Celular*"}
        placeholder={"DDDXXXXXXXX"}
        type={"text"}
        variant={"outlined"}
        fullWidth
        margin={"dense"}
        helperText={errors.phone?.message}
        register={register}
      />

      <InputField
        name={"cpf"}
        label={"CPF*"}
        placeholder="99999999999"
        type={"text"}
        variant={"outlined"}
        fullWidth
        margin={"dense"}
        helperText={errors.cpf?.message}
        register={register}
      />

      <InputField
        name={"password"}
        label={"Senha*"}
        placeholder={"Mínimo 6 caracters"}
        type={"password"}
        variant={"outlined"}
        fullWidth
        margin={"dense"}
        helperText={errors.password?.message}
        register={register}
      />

      <InputField
        name={"confirmPassword"}
        label={"Confirme sua senha*"}
        placeholder={"Mínimo 6 caracters"}
        type={"password"}
        variant={"outlined"}
        fullWidth
        margin={"dense"}
        register={register}
        helperText={errors.confirmPassword?.message}
      />

      <PrimaryButton type="submit">Cadastrar</PrimaryButton>

      <CheckboxContainer>
        <label>
          <input type="checkbox" name="terms" required />
          Aceito enviar meus dados para o processo de coleta seletiva
        </label>
      </CheckboxContainer>
    </FormContainer>
  );
};

export default UserSignUpForm;
