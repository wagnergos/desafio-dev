import styled from 'styled-components';

// SL - Store List
// H - Header
// TL - Transaction List

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: fit-content(320px) auto;
  grid-template-rows: 86px auto;

  grid-template-areas:
    'SL H'
    'SL TL';

  height: 100vh;
`;
