import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, form } from '../../styles/variables';

export const SForm = styled.form`
  width: 100%;
  padding: ${form.mdSpacing};
  background-color: ${({theme}) => theme.bg2};
  border-radius: ${form.borderRadius};
`;

export const SFormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const SFormControl = styled.div`
  :first-of-type {
    margin-top: ${form.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${form.smSpacing};
  }
`;

export const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${form.smSpacing} / 4);
`;

export const SInput = styled.input`
  width: 100%;
  padding: ${form.smSpacing};
  border: 1px solid ${({theme}) => theme.textFade};
  font-size: 14px;
  border-radius: ${form.borderRadius};
  outline: none;
`;

export const SButton = styled.button`
  ${btnReset};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${form.smSpacing};
  margin-top: ${form.mdSpacing};
  border-radius: ${form.borderRadius};
  background-color: ${({theme}) => theme.bgSecondary};
  color: ${({theme}) => theme.textSecondary};
  cursor: pointer;
`;

export const SRedirect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${form.smSpacing};
  font-size: 12px;
`;

export const SRedirectLabel = styled.span`
  color: ${({theme}) => theme.text2};
  margin-right: 5px;
`;

export const SRedirectLink = styled(Link)`
  color: ${({theme}) => theme.primary};
`;
