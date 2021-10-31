import React, { useEffect, useState, useCallback, useMemo } from 'react';

import { useTransaction } from '../../context/TransactionContext';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../context/ToastContext';

import { Container, Table } from './styles';

export default function TransactionList() {
  const [page, setPage] = useState(1);

  const { transactions, totalTransactions, getTransactions } = useTransaction();
  const { selectedStore } = useStore();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadTransactions() {
      try {
        setPage(1);
        await getTransactions(selectedStore);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro na listagem das transações',
          description:
            'Ocorreu um erro ao tentar listar as transações, verifique a sua conexão.',
        });
      }
    }

    loadTransactions();
  }, [getTransactions, selectedStore, addToast]);

  const changePage = useCallback(
    async p => {
      const newPage = p > 1 ? p : 1;

      console.log('nova page', newPage);
      setPage(newPage);

      await getTransactions(selectedStore, newPage);
    },
    [selectedStore, getTransactions]
  );

  const hasNextPage = useMemo(() => {
    return page < Math.ceil(totalTransactions / 10);
  }, [page, totalTransactions]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Data da transação</th>
            <th>Valor</th>
            <th>Transação</th>
            <th>Natureza</th>
            <th>Cartão</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.formattedTransactionAt}</td>
              <td className={transaction.category.type}>
                {transaction.formattedValue}
              </td>
              <td>{transaction.category.name}</td>
              <td>{transaction.formattedType}</td>
              <td>{transaction.card}</td>
              <td>{transaction.cpf}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <span>
          <strong>{page * 10 - 10}</strong> - <strong>{page * 10}</strong> de{' '}
          <strong>{totalTransactions}</strong>
        </span>

        <div>
          {page > 1 && (
            <button type="button" onClick={() => changePage(page - 1)}>
              Anterior
            </button>
          )}
          {hasNextPage && (
            <button type="button" onClick={() => changePage(page + 1)}>
              Próxima
            </button>
          )}
        </div>
      </div>
    </Container>
  );
}
