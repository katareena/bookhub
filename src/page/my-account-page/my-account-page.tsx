import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar';
import { SLayout, SHeader, SLogo, SUser, SMain } from './my-account-page.styles';
import { logoPic } from '../../assets/logo';

function MyAccountPage({children}: PropsWithChildren): JSX.Element {
  return (
    <>
      <SHeader>
        <SLogo to='/myaccount'>
          <img src={logoPic} alt='logo'/>
        </SLogo>
        <SUser>Name Surname</SUser>
      </SHeader>
      <SLayout>
        <Sidebar />
        <SMain>
          <Outlet />
        </SMain>
      </SLayout>
    </>
  );
}

export default MyAccountPage;

