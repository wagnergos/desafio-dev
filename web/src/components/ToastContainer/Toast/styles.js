import styled, { css } from 'styled-components';

const toastTypeVariations = {
  success: css`
    background: var(--success-primary);
    color: var(--success-secondary);
  `,
  error: css`
    background: var(--error-primary);
    color: var(--error-secondary);
  `,
};

export const Container = styled.div`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${({ type }) => toastTypeVariations[type || 'success']}

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 10px;
    top: 14px;
    opacity: 0.6;
    border: 0;
    color: inherit;
    font-size: 16px;
    background: transparent;
  }
`;
