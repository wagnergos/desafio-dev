import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const TransactionContext = createContext([]);

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async storeId => {
    const response = await api.get(`transactions/${storeId}`);

    setTransactions(response.data);
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
