import React from 'react';
import { NotFoundBox, NotFoundTitle, NotFoundLink } from './not-found-page.styles';

function NotFoundPage(): JSX.Element {
  return (
    <NotFoundBox>
      <NotFoundTitle>404. Page not found</NotFoundTitle>
      <NotFoundLink to='/'>Return to the home page</NotFoundLink>
    </NotFoundBox>
  );
}

export default NotFoundPage;
