import React, { useCallback, useState } from 'react';

import history from '../../services/history';

import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

import { Container } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValidation, setEmailValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const [submitLoading, setSubmitLoading] = useState(false);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (!email) setEmailValidation('O email é obrigatório.');
      if (!password) setPasswordValidation('A senha é obrigatório.');

      if (!email || !password) return;

      setEmailValidation('');
      setPasswordValidation('');
      setSubmitLoading(true);

      try {
        await signIn({ email, password });

        setEmail('');
        setPassword('');
        setSubmitLoading(false);

        history.push('/dashboard');
      } catch (err) {
        const errorMsgs = ['User not found', 'Password does not match'];
        const translationMsgs = ['Usuário não encontrado', 'Senha incorreta'];

        const { error } = err.response?.data;

        const msgIndex = errorMsgs.indexOf(error);

        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description:
            translationMsgs[msgIndex] ||
            'Ocorreu um erro na autenticação, tente novamente!',
        });
        setEmail('');
        setPassword('');
        setSubmitLoading(false);
      }
    },
    [email, password, signIn, addToast]
  );

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {emailValidation && <span>{emailValidation}</span>}
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {passwordValidation && <span>{passwordValidation}</span>}

          <button type="submit" disabled={submitLoading}>
            {submitLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </Container>
  );
}
