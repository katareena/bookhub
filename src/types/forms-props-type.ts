import { FormDataType } from './form-data-type';

export type FormProps = {
  title: string,
  formArr: FormDataType[],
  submitBtn: string,
  onSubmit: () => void;
  redirect: {
    label: string,
    link: {
      label: string,
      to: string,
    }
  }
}
