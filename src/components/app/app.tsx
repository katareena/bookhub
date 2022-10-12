import React from 'react';
import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { AppRoute } from '../../constants/constants';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global-styles';
import SignInPage from '../../page/sign-in-page/sign-in-page';
import MyAccountPage from '../../page/my-account-page/my-account-page';
import NotFoundPage from '../../page/not-found-page/not-found-page';

function App(): JSX.Element {
  const themeStyle = lightTheme;

  return (
    <ThemeProvider theme={themeStyle}>
        <GlobalStyle />

        <HistoryRouter history={browserHistory}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<SignInPage />}
            />

            <Route
              path={AppRoute.MyAccount}
              element={<MyAccountPage />}
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </HistoryRouter>

    </ThemeProvider>
  );
}

export default App;
