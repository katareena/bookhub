import React from 'react';
import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { AppRoute } from '../../constants/constants';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global-styles';
import SignInPage from '../../page/sign-in-page/sign-in-page';
import RegisterPage from '../../page/register-page/register-page';
import MyAccountPage from '../../page/my-account-page/my-account-page';
import NotFoundPage from '../../page/not-found-page/not-found-page';
import { FormProps } from '../../types/forms-props-type';

type AppProps = {
  signInForm: FormProps,
  registerForm: FormProps,
}

function App({signInForm, registerForm}: AppProps): JSX.Element {
  const themeStyle = lightTheme;

  return (
    <ThemeProvider theme={themeStyle}>
        <GlobalStyle />

        <HistoryRouter history={browserHistory}>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<SignInPage signInForm={signInForm}/>}
            />

            <Route
              path={AppRoute.Register}
              element={<RegisterPage registerForm={registerForm}/>}
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
