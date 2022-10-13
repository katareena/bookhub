import { FormDataType } from '../types/form-data-type';
import { FormProps } from '../types/forms-props-type';

const signInFormProps: FormProps = {
  title: 'Sign In',
  formArr: [
    {
      label: 'Email',
      name: 'email',
      type: 'text',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
    }
  ],
  submitBtn: 'Sign In',
  onSubmit: () => console.log(),
  redirect: {
    label: 'Don\'t have an account?',
    link: {
      label: 'Register',
      to: '/register',
    }
  }
};

export default signInFormProps;
