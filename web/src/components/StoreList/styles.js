import styled from 'styled-components';

// SL - Store List
export const Container = styled.div`
  grid-area: SL;

  max-height: 100vh;
  padding: 20px;
  background: var(--primary);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  direction: rtl;

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid var(--primary);
    background: var(--secondary);
  }

  ::-webkit-scrollbar-track {
    background: var(--primary);
  }
`;
