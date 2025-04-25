import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import Layout from "@/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { authSchema } from "@/schemas/authSchemas/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { IAuth } from "@/types/IAuth/IAuth";
import auth from "@/service/auth/auth";
import InputProps from "@/components/InputProps/InputProps";
import ErrosProps from "@/components/ErrosProps/ErrosProps";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: IAuth) => auth(data),
    onSuccess: () => {
      alert("Login realizado com sucesso");
      reset();
      navigate("/");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Erro desconhecido ao fazer login";
      alert(errorMessage);
    },
  });

  const submit = (data: IAuth) => {
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
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <Link className="text-[#8E4EC6] " to={""}>
                    Esqueci minha senha
                  </Link>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-[#8E4EC6] text-white rounded-none cursor-pointer"
                  >
                    Entrar
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default Login;
