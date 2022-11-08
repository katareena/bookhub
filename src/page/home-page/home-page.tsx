import React from 'react';
import Header from '../../components/header/header';
import SearchBox from '../../components/search-box/search-box';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <main>
      <Header />
      <SearchBox />
      <Outlet />
    </main>
  )
}

export default HomePage;
