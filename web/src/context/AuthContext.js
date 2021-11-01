import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import history from '../services/history';

import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@DesafioDev:token');
    const user = localStorage.getItem('@DesafioDev:user');

    api.defaults.headers.Authorization = `Bearer ${token}`;

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  useEffect(() => {
    const unlisten = history.listen(() => {
      const token = localStorage.getItem('@DesafioDev:token');

      if (!token) setData({});
    });

    return unlisten;
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@DesafioDev:token', token);
    localStorage.setItem('@DesafioDev:user', JSON.stringify(user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@DesafioDev:token');
    localStorage.removeItem('@DesafioDev:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};
