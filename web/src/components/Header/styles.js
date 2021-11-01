import styled from 'styled-components';

// H - Header
export const Container = styled.header`
  grid-area: H;

  padding: 20px;
  background: var(--secondary);

  display: flex;
  justify-content: space-between;

  button {
    padding: 10px;
    color: var(--white);
    font-weight: bold;
    background: none;

    transition: color 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
`;
