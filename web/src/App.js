import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { StoreProvider } from './context/StoreContext';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Routes />
      </StoreProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
