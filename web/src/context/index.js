import React from 'react';
import PropTypes from 'prop-types';

import { StoreProvider } from './StoreContext';
import { ToastProvider } from './ToastContext';

export const AppProvider = ({ children }) => (
  <StoreProvider>
    <ToastProvider>{children}</ToastProvider>
  </StoreProvider>
);

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
