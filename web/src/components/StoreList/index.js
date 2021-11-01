import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import { useStore } from '../../context/StoreContext';
import { useToast } from '../../context/ToastContext';

import { Container, Button } from './styles';

export default function StoreList() {
  const [loadingStores, setLoadingStores] = useState(false);

  const { stores, selectedStore, selectStore, getStores } = useStore();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadStores() {
      try {
        setLoadingStores(true);

        await getStores();

        setLoadingStores(false);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro na listagem de lojas',
          description:
            'Ocorreu um erro ao tentar listar as lojas, verifique a sua conexão.',
        });

        setLoadingStores(false);
      }
    }

    loadStores();
  }, [getStores, addToast]);

  function renderStoreList() {
    return stores.map(store => (
      <Button
        key={store.id}
        onClick={() => selectStore(store.id)}
        selected={selectedStore === store.id}
        isNegative={store.total_value < 0}
      >
        <strong>{store.name}</strong>
        <p>{store.owner_name}</p>
        <span>{store.formattedTotalValue}</span>
      </Button>
    ));
  }

  function renderMessages() {
    return selectedStore ? (
      <h2>Ocorreu um erro ao listar as lojas, tente novamente</h2>
    ) : (
      <h2>Importe um arquivo CNAB para listar as lojas</h2>
    );
  }

  function render() {
    if (loadingStores) return <h2>Carregando...</h2>;
    if (stores.length) return renderStoreList();
    return renderMessages();
  }

  return <Container>{render()}</Container>;
}
