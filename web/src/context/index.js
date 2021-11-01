import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './AuthContext';
import { StoreProvider } from './StoreContext';
import { TransactionProvider } from './TransactionContext';
import { ToastProvider } from './ToastContext';

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <StoreProvider>
      <TransactionProvider>
        <ToastProvider>{children}</ToastProvider>
      </TransactionProvider>
    </StoreProvider>
  </AuthProvider>
);

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
