import React from 'react';
import PropTypes from 'prop-types';

import { StoreProvider } from './StoreContext';
import { TransactionProvider } from './TransactionContext';
import { ToastProvider } from './ToastContext';

export const AppProvider = ({ children }) => (
  <StoreProvider>
    <TransactionProvider>
      <ToastProvider>{children}</ToastProvider>
    </TransactionProvider>
  </StoreProvider>
);

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
