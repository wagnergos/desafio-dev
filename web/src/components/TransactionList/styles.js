import styled from 'styled-components';

// TL - Transaction List
export const Container = styled.div`
  grid-area: TL;

  padding: 20px;

  background: var(--secondary);

  & > div {
    padding: 12px;
    color: var(--gray);

    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

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
  width: 100%;
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

    & > td.input {
      color: var(--success-primary);
    }

    & > td.output {
      color: var(--error-primary);
    }
  }
`;
