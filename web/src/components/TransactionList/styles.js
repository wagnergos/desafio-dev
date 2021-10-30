import styled from 'styled-components';

// TL - Transaction List
export const Container = styled.div`
  grid-area: TL;

  background: var(--secondary);

  div {
    display: flex;
    flex: 1;
    margin: 10px 5%;
    justify-content: flex-end;

    button {
      padding: 10px;
      border-radius: 4px;

      & + button {
        margin-left: 20px;
      }

      &:hover {
        background: var(--primary);
      }
    }
  }
`;

export const Table = styled.table`
  width: 95%;
  margin: 20px auto;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
  }

  thead th {
    text-align: left;
    font-weight: bold;
    color: var(--white);
  }

  tbody tr {
    color: var(--white);

    &:nth-of-type(odd) {
      color: var(--gray);
    }

    &:hover {
      color: var(--white);
      background: var(--gray);
    }
  }
`;
