import { createGlobalStyle } from "styled-components";
import { ThemeType } from '../types/theme-type';

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    font-size: 10px;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    letter-spacing: 0.6px;
  }
  input {
    -webkit-border-radius: 0; // removing the rounding on input (iOS)
    border-radius: 0;
    font-family: 'Arial', sans-serif;
    transition: all 0.2s ease;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  button {
    border: none;
    background-color: transparent;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    font-family: 'Arial', sans-serif;
    transition: all 0.2s ease;
  }
  p {
    margin: 0;
  }
`;
