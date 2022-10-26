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
    font-family: 'Roboto', monospace;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      border-color: ${({theme}) => theme.hover};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  button {
    transition: all 0.2s ease;
    cursor: pointer;

    /* &:hover,
    &:focus {
      color: ${({theme}) => theme.hover};
    } */
  }
  p {
    margin: 0;
  }
`;
