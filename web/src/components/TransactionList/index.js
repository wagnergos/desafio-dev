import React, { useEffect } from 'react';

import { useTransaction } from '../../context/TransactionContext';
import { useStore } from '../../context/StoreContext';
import { useToast } from '../../context/ToastContext';

import { Container, Table } from './styles';

export default function TransactionList() {
  const { transactions, getTransactions } = useTransaction();
  const { selectedStore } = useStore();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadTransactions() {
      try {
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
        <button type="button">Anterior</button>
        <button type="button">Próxima</button>
      </div>
    </Container>
  );
}
