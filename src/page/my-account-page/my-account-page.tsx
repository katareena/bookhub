import React, { PropsWithChildren } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import { SLayout, SMain } from './my-account-page.styles';

function MyAccountPage({children}: PropsWithChildren): JSX.Element {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
}

export default MyAccountPage;

