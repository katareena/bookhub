import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import signInFormProps from './mocks/sign-in-form-props';
import registerFormProps from './mocks/register-form-props';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      signInForm={signInFormProps}
      registerForm={registerFormProps}
    />
  </React.StrictMode>
);
