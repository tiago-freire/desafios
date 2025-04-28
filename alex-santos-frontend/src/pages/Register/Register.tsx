import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import Layout from "@/layout/Layout";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { registerUserSchema } from "@/schemas/authSchemas/registerUserSchema";
import registerUser from "@/service/auth/registerUserApi";
import { IRegisterUser } from "@/types/IAuth/IRegisterUser";
import InputProps from "@/components/InputProps/InputProps";
import ButtonProps from "@/components/ButtonProps/ButtonProps";
import ErrosProps from "@/components/ErrosProps/ErrosProps";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: IRegisterUser) => registerUser(data),
    onSuccess: () => {
      alert("Cadastro realizado com sucesso");
      reset();
      navigate("/login");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Erro desconhecido ao fazer cadastro";
      alert(errorMessage);
    },
  });

  const submit = (data: IRegisterUser) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center min-h-screen p-2 ">
          <Card className="p-6 w-full max-w-md bg-[#121113] border-none opacity-90">
            <form onSubmit={handleSubmit(submit)}>
              <div className="space-y-4">
                <InputProps
                  label="Nome"
                  type="text"
                  register={register("name")}
                />
                <ErrosProps message={errors.name?.message} />
                <InputProps
                  label="E-mail"
                  type="text"
                  register={register("email")}
                />
                <ErrosProps message={errors.email?.message} />
                <InputProps
                  label="Senha"
                  type="password"
                  register={register("password")}
                />
                <ErrosProps message={errors.password?.message} />
                <InputProps
                  label="Confirmação de Senha"
                  type="password"
                  register={register("confirmPassword")}
                />
                <ErrosProps message={errors.confirmPassword?.message} />
              </div>
              <div className="flex justify-end">
                <div>
                  <ButtonProps color="#8E4EC6"> Cadastrar </ButtonProps>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default Register;
