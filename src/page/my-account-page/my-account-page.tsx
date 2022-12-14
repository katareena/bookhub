import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import { SideLayout, SideMain } from './my-account-page.styles';
import { logoPic } from '../../assets/logo';

function MyAccountPage({children}: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />

      <SideLayout>
        <Sidebar />
        <SideMain>
          <Outlet />
        </SideMain>
      </SideLayout>
    </>
  );
}

export default MyAccountPage;

