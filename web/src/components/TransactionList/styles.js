import styled from 'styled-components';

// TL - Transaction List
export const Container = styled.div`
  grid-area: TL;

  // 86px from header height
  max-height: calc(100vh - 86px);
  padding: 20px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid var(--secondary);
    background: var(--primary);
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary);
  }

  background: var(--secondary);

  h2 {
    height: 100%;
    color: var(--primary);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    padding: 12px;
    color: var(--gray);

    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    transition: color ease 0.2s;

    button {
      padding: 10px;
      border-radius: 4px;
      color: var(--secondary);
      font-weight: bold;
      background: var(--primary);

      & + button {
        margin-left: 20px;
      }

      &:hover {
        color: var(--white);
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
