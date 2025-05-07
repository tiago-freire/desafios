import { FormEvent, useState } from 'react';
import * as S from './styles';
import Button from '../../components/Button/style';
import { registerUser } from '../../services/userService';
import { useAuth } from '../../contexts/AuthContext';

type RegisterErrors = {
  email?: string;
  password?: string;
  login?: string;
};

const Register = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [errors, setErrors] = useState<RegisterErrors>({});

  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await registerUser({ name, email, password });

      login(response.token, {
        id: response.id,
        email: response.email,
        name: response.name,
      });
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      setErrors({
        login: err.response?.data?.message || 'Erro ao fazer login.',
      });
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.AreaInput>
          <S.Label htmlFor="nome">Nome</S.Label>
          <S.Input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </S.AreaInput>

        <S.AreaInput>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </S.AreaInput>

        <S.AreaInput>
          <S.Label htmlFor="password">Senha</S.Label>
          <S.Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </S.AreaInput>

        <S.AreaInput>
          <S.Label htmlFor="confirm-password">Confirmação de senha</S.Label>
          <S.Input
            id="confirm-password"
            type="password"
            placeholder="Digite sua senha novamente"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </S.AreaInput>

        {errors.login && <S.Error>{errors.login}</S.Error>}

        <S.LoginControl>
          <Button width="83px" type="submit">Cadastrar</Button>
        </S.LoginControl>
      </S.Form>
    </S.Container>
  );
};

export default Register;
