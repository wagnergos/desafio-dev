import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Routes />
      </StoreProvider>

      <ToastContainer />

      <GlobalStyle />
    </Router>
  );
}

export default App;
