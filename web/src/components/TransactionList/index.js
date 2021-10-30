import React from 'react';

import { Container, Table } from './styles';

export default function TransactionList() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Data da transação</th>
            <th>Nome da loja</th>
            <th>Dono da loja</th>
            <th>Valor</th>
            <th>Transação</th>
            <th>Natureza</th>
            <th>Cartão</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>nome</td>
            <td>nome</td>
            <td>valor</td>
            <td>tdansação</td>
            <td>natureza</td>
            <td>cartão</td>
            <td>cpf</td>
          </tr>
          <tr>
            <td>data</td>
            <td>nome</td>
            <td>nome</td>
            <td>valor</td>
            <td>tdansação</td>
            <td>natureza</td>
            <td>cartão</td>
            <td>cpf</td>
          </tr>
        </tbody>
      </Table>

      <div>
        <button type="button">Anterior</button>
        <button type="button">Próxima</button>
      </div>
    </Container>
  );
}
