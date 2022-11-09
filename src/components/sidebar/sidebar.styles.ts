import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btnReset, sideBar } from '../../styles/variables';

export const SSidebar = styled.div<{isOpen: boolean}>`
  width: ${({ isOpen }) => (!isOpen ? `auto` : sideBar.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${sideBar.lgSpacing};
  padding-top: 24px;
  padding-bottom: 24px;
  position: relative;
  transition-property: width;
  box-shadow: 5px 0 5px -5px ${({ theme }) => theme.bg3};

  animation-name: menuOpenMobile;
  animation-duration: 3s;

  @keyframes menuOpenTablet {
  from {
    width: auto;
  }
  to {
    width: ${({ isOpen }) => (!isOpen ? `auto` : sideBar.sidebarWidth)};
  }
}
`;

export const SSidebarButton = styled.button<{isOpen: boolean}>`
  ${btnReset};
  position: absolute;
  top: 7px;
  right: -23px;
  /* top: ${sideBar.xxlSpacing}; */
  /* right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)}; */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
  /* transition: all 1s ease; */
  z-index: 2;
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${sideBar.lgSpacing} 0;
`;

export const SLinkContainer = styled.div<{isActive: boolean}>`
  background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
  border-radius: ${sideBar.borderRadius};
  margin: 8px 0;

  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${sideBar.smSpacing} - 2px) 0;
  width: ${({ isOpen }) => (!isOpen ? `fit-content` : `auto`)};
`;

export const SLinkIcon = styled.div`
  padding: ${sideBar.smSpacing} ${sideBar.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  font-size: 1.4rem;
  display: block;
  flex: 1;
  margin-left: ${sideBar.smSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 1.1rem;
  padding: calc(${sideBar.smSpacing} / 2) ${sideBar.smSpacing};
  border-radius: calc(${sideBar.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${sideBar.mdSpacing};
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;
export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
  font-size: inherit;
`;
export const SThemeToggler = styled.button<{isActive: boolean}>`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
