import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '../../components/Button/style';
import { loginUser } from '../../services/userService';
import { useAuth } from '../../contexts/AuthContext';

type LoginErrors = {
  email?: string;
  password?: string;
  login?: string;
};

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<LoginErrors>({});

  const validateInputs = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!email || !email.includes('@')) {
      newErrors.email = 'Digite um e-mail válido.';
    }

    if (!password || password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const isValid = validateInputs();
    if (!isValid) return;

    try {
      const response = await loginUser({ email, password });

      login(response.token, {
        id: response.id,
        email: response.email,
        name: response.nome,
      });

    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      const message = err.response?.data?.message || 'Erro ao fazer login.';
      setErrors({ login: message });
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.AreaInput>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <S.Error>{errors.email}</S.Error>}
        </S.AreaInput>

        <S.AreaInput>
          <S.Label htmlFor="password">Senha</S.Label>
          <S.Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <S.Error>{errors.password}</S.Error>}
        </S.AreaInput>

        {errors.login && <S.Error>{errors.login}</S.Error>}

        <S.LoginControl>
          <a href="/register">Esqueci minha senha</a>
          <Button width="83px" type="submit">Entrar</Button>
        </S.LoginControl>
      </S.Form>
    </S.Container>
  );
};

export default Login;
