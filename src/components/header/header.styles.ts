import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 1.8rem 0;
  box-shadow: 0px 7px 10px -5px ${({ theme }) => theme.bg3}, 0px 4px 6px -2px ${({ theme }) => theme.bg};
  z-index: 1;
  position: relative;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.5rem;
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBox = styled.nav`
  position: relative;

  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  background-color: transparent;
  transform: translateX(0);

/* mobile:
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: var(--black-color);
  height: 100%;
  width: 280px;
  display: flex;
  padding: 10rem 3rem 0 3rem;
  transform: translatex(100%);
  transition: var(--transition); */
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  span {
    font-size: 2.4rem;
    line-height: 1.7;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    color: ${({theme}) => theme.hover};
    outline: none;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  outline: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  z-index: 11;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-bottom: 0;
  margin-left: 2.8rem;
`;

export const NavItemLink = styled(Link)`
  font-size: 1.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({theme}) => theme.text};
  opacity: 0.8;

  &:hover,
  &:focus {
    color: ${({theme}) => theme.hover};
    outline: none;
  }
`
