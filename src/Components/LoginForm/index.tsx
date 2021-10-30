import { Input } from "../Input";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserDataLogin } from "../../Interfaces/UserData";
import { UseSignIn } from "../../Providers/SignIn";
// import { UseAuth } from "../../Providers/Auth";
// import { LoginContainer, LoginForm } from "../../Styles/ComponentsStyles/LoginContainer";

export const LoginForm = () => {
  const { signIn } = UseSignIn();

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: IUserDataLogin) => {
    console.log(data);
    signIn(data);
  };

  return (
    <div>
      <h3>Login:</h3>

      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          placeholder="Email"
          register={register}
          text={"email"}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          register={register}
          text={"password"}
          error={errors.password?.message}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}