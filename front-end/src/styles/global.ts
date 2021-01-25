import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    --webkit-font-smooth: antialiased;
    background-color: #263752;
    color: #f0ece2;
  }

  button {
    cursor: pointer;
  }
`;
