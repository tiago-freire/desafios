import * as yup from "yup";
export const registerUserSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
