import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { AppRoute } from '../../constants/constants';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global';
import { ThemeContextType } from '../../types/theme-context-type';
import PrivateRoute from '../private-route/private-route';
import SignInPage from '../../page/sign-in-page/sign-in-page';
import RegisterPage from '../../page/register-page/register-page';
import MyAccountPage from '../../page/my-account-page/my-account-page';
import Search from '../search/search';
import NotFoundPage from '../../page/not-found-page/not-found-page';
import { FormProps } from '../../types/forms-props-type';
import { AuthorizationStatus } from '../../constants/constants';

type AppProps = {
  signInForm: FormProps,
  registerForm: FormProps,
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: null,
  setTheme: (theme) => {theme},
});

function App({signInForm, registerForm}: AppProps): JSX.Element {
  const [theme, setTheme] = useState('light');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
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
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <MyAccountPage />
                </PrivateRoute>
              }
            >
              <Route index element={
                <>
                  <div>home</div>
                </>
                }
              />

              <Route path={`${AppRoute.MyAccount}/search`} element={<Search />}
              />
            </Route>

            <Route
              path={AppRoute.NoFoundPage}
              element={<NotFoundPage />}
            />
          </Routes>
        </HistoryRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
