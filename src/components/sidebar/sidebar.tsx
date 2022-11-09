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
import {
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSetting,
} from 'react-icons/ai';
import { MdOutlineFavoriteBorder, MdOutlineNotifications } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { MdLogout, MdOutlineAnalytics } from 'react-icons/md';
import { ThemeContext } from './../app/app';
import { ThemeContextType } from '../../types/theme-context-type'
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';

function Sidebar(): JSX.Element {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const [ sidebarOpen, setSidebarOpen ] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <SSidebar isOpen={sidebarOpen}>
      <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((value) => !value)}>
        <AiOutlineLeft />
      </SSidebarButton>

      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} isOpen={sidebarOpen} aria-label={label}>
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
          <SLink to={to} isOpen={sidebarOpen}>
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
          aria-label='switch the app`s color theme'
        >
          <SToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: 'My Account',
    icon: <AiOutlineHome />,
    to: AppRoute.Account,
    notification: 0,
  },
  {
    label: 'Favorites',
    icon: <MdOutlineFavoriteBorder />,
    to: AppRoute.Favorites,
    notification: 5,
  },
  {
    label: 'Orders',
    icon: <MdOutlineAnalytics />,
    to: '/orders',
    notification: 3,
  },
  {
    label: 'My Reviews',
    icon: <BiMessageDetail />,
    to: '/reviews',
    notification: 0,
  },
  {
    label: 'Notifications',
    icon: <MdOutlineNotifications />,
    to: '/notifications',
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
