import React from 'react';
import { SLink } from './not-found-page.styles';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404. Page not found</h1>
      <SLink to='/myaccount'>Return to the home page</SLink>
    </>
  );
}

export default NotFoundPage;
