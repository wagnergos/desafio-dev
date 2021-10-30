import React from 'react';

import { Container, Button } from './styles';

export default function StoreList() {
  return (
    <Container>
      <Button selected>
        <strong>Nome da loja</strong>
        <p>Nome do dono</p>
        <span>R$ 1.500,00</span>
      </Button>
      <Button>
        <strong>Nome da loja</strong>
        <p>Nome do dono</p>
        <span>R$ 1.500,00</span>
      </Button>
    </Container>
  );
}
