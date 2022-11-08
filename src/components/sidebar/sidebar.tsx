import React, { useContext, useRef, useState } from 'react';
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from './sidebar.styles';
// import { logoSVG } from '../../assets';
import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from 'react-icons/ai';
import {
  MdOutlineFavoriteBorder,
} from 'react-icons/md';
import { MdLogout, MdOutlineAnalytics } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { ThemeContext } from './../app/app';
import { ThemeContextType } from '../../types/theme-context-type'
import { useLocation } from 'react-router-dom';

function Sidebar(): JSX.Element {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((value) => !value)}>
          <AiOutlineLeft />
        </SSidebarButton>
      </>

      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                  {/* if notifications are at 0 or null, do not display */}
                  {!!notification && (
                    <SLinkNotification>{notification}</SLinkNotification>
                  )}
                </>
              )}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      {secondaryLinksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />

      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === 'dark'}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <SToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/myaccount',
    notification: 0,
  },
  {
    label: 'Search',
    icon: <AiOutlineSearch />,
    to: '/myaccount/search',
    notification: 0,
  },
  {
    label: 'Favorites',
    icon: <MdOutlineFavoriteBorder />,
    to: '/myaccount/favorite',
    notification: 5,
  },
  {
    label: 'Statistics',
    icon: <MdOutlineAnalytics />,
    to: '/statistics',
    notification: 3,
  },
  {
    label: 'Customers',
    icon: <BsPeople />,
    to: '/customers',
    notification: 0,
  },
  {
    label: 'Diagrams',
    icon: <AiOutlineApartment />,
    to: '/diagrams',
    notification: 1,
  },
];

const secondaryLinksArray = [
  {
    label: 'Settings',
    icon: <AiOutlineSetting />,
    to: '/settings',
  },
  {
    label: 'Logout',
    icon: <MdLogout />,
    to: '/',
  },
];

export default Sidebar;
