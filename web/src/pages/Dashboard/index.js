import React from 'react';

import Header from '../../components/Header';
import StoreList from '../../components/StoreList';
import TransactionList from '../../components/TransactionList';

import { GridContainer } from './styles';

export default function Dashboard() {
  return (
    <GridContainer>
      <Header />
      <StoreList />
      <TransactionList />
    </GridContainer>
  );
}
