import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  ::-webkit-input-placeholder {
    color: #a9a9a9;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: #a9a9a9;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #a9a9a9;
  }

  :-ms-input-placeholder {
    color: #a9a9a9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    color: white;
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
