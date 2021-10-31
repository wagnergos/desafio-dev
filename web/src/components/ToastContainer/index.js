import React from 'react';

import { Container, Toast } from './styles';

export default function ToastContainer() {
  return (
    <Container>
      <Toast type="error">
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível carregar a lista de lojas</p>
        </div>

        <button type="button">x</button>
      </Toast>
      <Toast hasDescription={false}>
        <div>
          <strong>Lista com sucesso</strong>
        </div>

        <button type="button">x</button>
      </Toast>
    </Container>
  );
}
