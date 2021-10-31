import React, { useRef, useCallback } from 'react';

import api from '../../services/api';

import { useStore } from '../../context/StoreContext';
import { useTransaction } from '../../context/TransactionContext';
import { useToast } from '../../context/ToastContext';

import { Button } from './styles';

export default function Header() {
  const inputCnabImport = useRef();

  const { selectedStore, getStores } = useStore();
  const { getTransactions } = useTransaction();
  const { addToast } = useToast();

  const handleImport = useCallback(
    async e => {
      try {
        const formData = new FormData();

        formData.append('file', e.target.files[0]);

        await api.post('cnab', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        await Promise.all([
          getStores(selectedStore),
          getTransactions(selectedStore),
        ]);

        inputCnabImport.current.value = '';

        addToast({
          type: 'success',
          title: 'Dados importados!',
          description: 'Os dados da CNAB foram importados com sucesso',
        });
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao importar CNAB',
          description:
            'Ocorreu um erro ao tentar importar o CNAB, verifique a sua conexão e se o arquivo é valido',
        });
      }
    },
    [selectedStore, getStores, getTransactions, addToast]
  );

  const handleBtnClick = useCallback(() => inputCnabImport.current.click(), []);

  return (
    <>
      <Button type="button" onClick={handleBtnClick}>
        Importar CNAB
      </Button>
      <input
        hidden
        ref={inputCnabImport}
        type="file"
        accept=".txt"
        onChange={handleImport}
      />
    </>
  );
}
