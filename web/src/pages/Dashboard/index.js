import React from 'react';

import StoreList from '../../components/StoreList';
import TransactionList from '../../components/TransactionList';

import { GridContainer } from './styles';

export default function Dashboard() {
  return (
    <GridContainer>
      <StoreList />
      <TransactionList />
    </GridContainer>
  );
}
