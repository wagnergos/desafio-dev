import styled from 'styled-components';

// SL - Store List
// H - Header
// TL - Transaction List

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: 60px auto;

  grid-template-areas:
    'SL H'
    'SL TL';

  height: 100vh;
`;
