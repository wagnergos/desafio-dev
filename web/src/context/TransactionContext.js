import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { formatToBrl } from '../helpers/currency';
import { formatToBrDate } from '../helpers/date';

import api from '../services/api';

const TransactionContext = createContext([]);

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async storeId => {
    const response = await api.get(`transactions/${storeId}`);

    const formattedTransactions = await Promise.all(
      response.data.map(transaction => ({
        ...transaction,
        formattedTransactionAt: formatToBrDate(transaction.transaction_at),
        formattedValue: formatToBrl(
          transaction.category.type === 'input'
            ? transaction.value
            : transaction.value * -1
        ),
        formattedType:
          transaction.category.type === 'input' ? 'Entrada' : 'Saída',
      }))
    );

    setTransactions(formattedTransactions);
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, getTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('useTransaction must be used within a TrasactionProvider');
  }

  return context;
}

TransactionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};