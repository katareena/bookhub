import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { boxes, bp } from '../../styles/variables';

export const HeaderContainer = styled.header`
  padding: 1.8rem 0;
  box-shadow: 0px 7px 10px -5px ${({ theme }) => theme.bg3};
  position: relative;
  z-index: 1;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${boxes.lgSpacing};

  @media (${bp.md}) {
    padding: 0 ${boxes.mdSpacing};
  }

  @media (${bp.sm}) {
    padding: 0 ${boxes.smSpacing};
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const BurgerButton = styled.button<{isToggleMenu: boolean;}>`
  display: none;
  outline: 0;
  border: none;
  background-color: transparent;
  color: ${({theme, isToggleMenu}) => isToggleMenu ? theme.hover : theme.text};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  z-index: 11;

  @media (${bp.sm}) {
    display: block;
  }
`;

export const NavBox = styled.nav<{isToggleMenu: boolean}>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  background-color: transparent;

  position: relative;
  transform: translateX(0);

  @media (${bp.sm}) {
    height: 100%;
    width: 250px;
    justify-content: flex-start;
    padding: 10rem 3rem 0 3rem;
    background-color: ${({ theme }) => theme.bg};
    box-shadow: -5px 0 5px -5px ${({ theme }) => theme.bg3};

    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;

    transform: ${({isToggleMenu}) => isToggleMenu ? `translatex(0)` : `translatex(100%)`};;
    transition: all 300ms ease-in-out;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;

  @media (${bp.sm}) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 0;
  margin-left: 2.8rem;

  @media (${bp.sm}) {
    flex-direction: column;
    margin-left: 0;
    margin: 0.7rem 0;
  }
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
