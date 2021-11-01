import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${({ hasMessage }) => (hasMessage ? '30px' : 0)};
  overflow: hidden;
`;
