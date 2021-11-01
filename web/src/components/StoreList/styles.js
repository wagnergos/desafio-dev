import styled from 'styled-components';

// SL - Store List
export const Container = styled.div`
  grid-area: SL;

  max-height: 100vh;
  padding: 20px;
  padding-left: 4px;
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

  h2 {
    text-align: left;
    color: var(--secondary);
  }
`;

export const Button = styled.button`
  width: 100%;
  min-height: 78px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: left;
  line-height: 1.3;
  background: ${({ selected }) =>
    selected ? 'var(--white)' : 'var(--secondary)'};

  flex-shrink: 0;

  transition: background ease 0.2s;

  &:hover {
    background: var(--white);

    strong {
      color: var(--secondary);
    }
  }

  strong {
    font-size: 18px;
    color: ${({ selected }) =>
      selected ? 'var(--secondary)' : 'var(--white)'};
  }

  p {
    color: var(--gray);
  }

  span {
    font-weight: bold;
    color: ${({ isNegative }) =>
      isNegative ? 'var(--error-primary)' : 'var(--primary)'};
  }
`;
