import React, { createContext, useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { formatToBrl } from '../helpers/currency';

import api from '../services/api';

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [stores, setStores] = useState(() => {
    const storesStorage = localStorage.getItem('@DesafioDev:stores');

    if (storesStorage) return JSON.parse(storesStorage);

    return [];
  });

  const [selectedStore, setSelectedStore] = useState(() => {
    const selected = localStorage.getItem('@DesafioDev:selectedStore');

    if (selected) return selected;

    return 0;
  });

  const getStores = useCallback(async (storeId = null) => {
    const response = await api.get('/stores');

    if (!Array.isArray(response.data) || !response.data.length) return;

    const formattedStore = await response.data.map(store => ({
      ...store,
      formattedTotalValue: formatToBrl(store.total_value),
    }));

    localStorage.setItem('@DesafioDev:selectedStore', response.data[0].id);

    if (!storeId) {
      localStorage.setItem(
        '@DesafioDev:stores',
        JSON.stringify(formattedStore)
      );
      setSelectedStore(response.data[0].id);
    }

    setStores(formattedStore);
  }, []);

  const selectStore = useCallback(id => {
    setSelectedStore(id);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        stores,
        selectedStore,
        selectStore,
        getStores,
      }}
    >
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
