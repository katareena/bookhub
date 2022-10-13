import { FormDataType } from '../types/form-data-type';

const registerFormProps = {
  title: 'Register',
  formArr: [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
    },

    {
      label: "Password",
      name: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
    },
  ],
  submitBtn: 'Register',
  onSubmit: () => console.log(),
  redirect: {
    label: 'Already have an account?',
    link: {
      label: 'Sign In',
      to: '/',
    }
  }
};

export default registerFormProps;
