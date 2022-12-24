import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    font-family: roboto , sans-serif;
  }

`;
