import React from 'react';
import Form from '../../components/form/form';
import { SFixedContainer } from '../../components/containers/containers.styles';
import { CONTAINER_SIZE } from '../../constants/constants';
import { FormProps } from '../../types/forms-props-type';

type RegisterPageProps = {
  signInForm: FormProps,
}

function SignInPage({signInForm}: RegisterPageProps): JSX.Element {
  const {title, formArr, submitBtn, onSubmit, redirect} = signInForm;
  const onSubmitHandler = () => {}

  return (
    <SFixedContainer size={CONTAINER_SIZE}>
      <Form
        title={title}
        formArr={formArr}
        submitBtn={submitBtn}
        onSubmit={onSubmit}
        redirect={redirect}
      />
    </SFixedContainer>
  );
}

export default SignInPage;
