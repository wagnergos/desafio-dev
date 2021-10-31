import React from 'react';
import { useEffect } from 'react/cjs/react.development';

import { useStore } from '../../context/StoreContext';
import { useToast } from '../../context/ToastContext';

import { Container, Button } from './styles';

export default function StoreList() {
  const { stores, getStores } = useStore();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadStores() {
      try {
        await getStores();
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro na listagem de lojas',
          description:
            'Ocorreu um erro ao tentar listar as lojas, verifique a sua conexão.',
        });
      }
    }

    loadStores();
  }, [getStores]);

  return (
    <Container>
      {Array.isArray(stores) && !!stores.length ? (
        stores.map(store => (
          <Button key={store.id} selected>
            <strong>{store.name}</strong>
            <p>{store.owner_name}</p>
            <span>R$ 1.500,00</span>
          </Button>
        ))
      ) : (
        <h2>Importe um arquivo CNAB para listar as lojas</h2>
      )}
    </Container>
  );
}
