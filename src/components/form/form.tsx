import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  SForm,
  SFormTitle,
  SFormControl,
  SLabel,
  SInput,
  SButton,
  SRedirect,
  SRedirectLabel,
  SRedirectLink
} from './form.styles';
import { FormDataType } from '../../types/form-data-type';
import { FormProps } from '../../types/forms-props-type';

const prepareForm = (formArr: FormDataType[]) => {
  return formArr.reduce((newObj, elem) => {
    return {...newObj, [elem.name]: ''}
  }, {});
}

function Form ({ title, formArr, submitBtn, onSubmit, redirect }: FormProps): JSX.Element {
  const initalForm = prepareForm(formArr);
  const [form, setForm] = useState(initalForm);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => setForm((prev) => ({...prev, [evt.target.name]: evt.target.value}));
  const onSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    //send form-data to ..
    setForm(initalForm);
  }

  const hasRedirect = !!redirect;

  return (
    <SForm
      autoComplete={'off'}
      onSubmit={onSubmitHandler}
      >
      <SFormTitle>{title}</SFormTitle>
      {formArr.map(({label, name, type}, index) => (
        <SFormControl key={name+index}>
          <SLabel htmlFor={name}>{label}</SLabel>
          <SInput
            id={name}
            name={name}
            type={type}
            value={form[name as keyof typeof form]}
            onChange={(evt) => onChangeHandler(evt)}
            />
        </SFormControl>
      ))}

      <SButton type={'submit'}>{submitBtn}</SButton>

      {hasRedirect && (
        <SRedirect>
          <SRedirectLabel>{redirect.label}</SRedirectLabel>
          <SRedirectLink to={redirect.link.to}>{redirect.link.label}</SRedirectLink>
        </SRedirect>
      )}

    </SForm>
  );
};

export default Form;
