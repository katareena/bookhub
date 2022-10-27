import styled from 'styled-components';
import { btnReset, sideBar } from '../../styles/variables';

export const SWrap = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: column;
`;

export const SSearch = styled.div`
display: flex;
width: 100%;
margin-top: 5px;
margin-bottom: 25px;
border: 1px solid ${({ theme }) => theme.bg3};
border-radius: ${sideBar.borderRadius};
background-color: ${({ theme }) => theme.bgAlpha};

input {
  padding: 0 ${sideBar.smSpacing};
  font-family: inherit;
  letter-spacing: inherit;
  font-size: 16px;
  width: 100%;
  outline: none;
  border: none;
  color: inherit;
  background: transparent;
}
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${sideBar.mdSpacing} - 2px) ${sideBar.mdSpacing};
  display: flex;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export const SContent = styled.div`
  width: inherit;
  height: 100px;
  background-color: greenyellow;
`;
