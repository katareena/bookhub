import { createGlobalStyle } from "styled-components";
import { ThemeType } from '../types/theme-type';

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', monospace;
    letter-spacing: 0.6px;
    padding: 1rem;
  }
  input {
    -webkit-border-radius: 0; // removing the rounding on input (iOS)
    border-radius: 0;
  }
`;
