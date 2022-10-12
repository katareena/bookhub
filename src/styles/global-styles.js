import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 1rem;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', monospace;
    letter-spacing: .6px;
  }
  input {
    -webkit-border-radius: 0; // removing the rounding on input (iOS)
    border-radius: 0;
  }
`;
