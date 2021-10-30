import styled from 'styled-components';

export const Button = styled.header`
  padding: 14px;
  border-radius: 4px;
  color: var(--secondary);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: var(--primary);

  display: inline-block;

  transition: color ease 0.2s;

  &:hover {
    color: var(--white);
  }
`;
