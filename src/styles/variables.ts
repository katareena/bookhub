import { css } from 'styled-components';

export const boxes = {
  lgSpacing: `4.5rem`,
  mdSpacing: `3.5rem`,
  smSpacing: `2.5rem`,
};

export const form = {
  headerHeight: '60px',
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `32px`,
  xlSpacing: `48px`,
  xxlSpacing: `64px`,
  borderRadius: '4px',
  boxShadow: `0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15)`,
};

export const sideBar = {
  sidebarWidth: `300px`,
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `24px`,
  xlSpacing: `32px`,
  xxlSpacing: `48px`,
  borderRadius: `6px`,
}

export const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;

export const size = {
  lg: '64em', // 1024px = 64em
  md: '48em', // 768px = 48em
  sm: '36em' // 576px = 36em
};

export const bp = {
  lg: `(max-width: ${size.lg})`,
  md: `(max-width: ${size.md})`,
  sm: `(max-width: ${size.sm})`,
};

export const stable = {
  bg1: 'rgb(30, 30, 30)',
}
