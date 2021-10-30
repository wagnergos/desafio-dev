import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button {
    border: 0;
    outline: 0;

    font: 14px 'Roboto' sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #02BE3B;
    --secondary: #171616;

    --white: #fff;
    --gray: #898989;
  }
`;
