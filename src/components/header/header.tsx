import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HeaderContainer, HeaderWrap, HeaderBox, NavBox, Logo, NavList, NavItem, NavItemLink, BurgerButton } from './header.styles';
import { AppRoute } from '../../constants/constants';

function Header(): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <HeaderContainer id='navbar'>
      <HeaderWrap>

        <HeaderBox className='brand-and-toggler flex flex-sb'>
          <Logo to={AppRoute.Root}>
            <span>bookhub</span>
          </Logo>

          <BurgerButton type='button' isToggleMenu={toggleMenu} onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} />
          </BurgerButton>
        </HeaderBox>

        <NavBox isToggleMenu={toggleMenu}>
          <NavList>
            <NavItem>
              <NavItemLink to={AppRoute.About}>About</NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to={AppRoute.Account}>Account</NavItemLink>
            </NavItem>
          </NavList>
        </NavBox>

      </HeaderWrap>
    </HeaderContainer>
  )
}

// const linksArray = [
//   {
//     label: 'About',
//     icon: <AiOutlineHome />,
//     to: '/myaccount',
//   },
//   {
//     label: 'Account',
//     icon: <AiOutlineSearch />,
//     to: '/myaccount',
//   },
// ];

export default Header;
