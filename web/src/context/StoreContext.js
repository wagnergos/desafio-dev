import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const StoreContext = createContext([]);

export const StoreProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const stores = localStorage.getItem('@DesafioDev:stores');

    if (stores) return JSON.parse(stores);

    return [];
  });

  const getStores = useCallback(async () => {
    const response = await api.get('/stores');

    localStorage.setItem('@DesafioDev:stores', JSON.stringify(response.data));
    console.log(response.data);
    setData(response.data);
  }, []);

  return (
    <StoreContext.Provider value={{ stores: data, getStores }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
}

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
