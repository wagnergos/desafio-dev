import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: var(--secondary);

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    max-width: 315px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        height: 40px;
        border-radius: 8px;
        padding: 0 15px;
        margin: 0 0 10px;
        color: var(--white);
        background: rgba(0, 0, 0, 0.3);

        &::placeholder {
          color: var(--gray);
        }
      }

      button {
        height: 44px;
        border-radius: 8px;
        margin-top: 16px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        background: var(--primary);

        transition: background 0.2s;

        &:hover:enabled {
          background: var(--white);
          color: var(--primary);
        }

        &:disabled {
          background: var(--gray);
          cursor: not-allowed;
        }
      }
    }

    span {
      color: var(--red);
      text-align: left;
      margin-bottom: 24px;
    }
  }
`;
