import React from 'react';

import history from '../../services/history';

import { useAuth } from '../../context/AuthContext';

import Upload from '../Upload';

import { Container } from './styles';

export default function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  return (
    <Container>
      <Upload />
      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
