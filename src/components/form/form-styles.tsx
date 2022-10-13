import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnReset, v } from '../../styles/variables';

export const SForm = styled.form`
  width: 100%;
  padding: ${v.mdSpacing};
  background-color: ${({theme}) => theme.bg2};
  border-radius: ${v.borderRadius};
`;

export const SFormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const SFormControl = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

export const SLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SInput = styled.input`
  width: 100%;
  padding: ${v.smSpacing};
  border: 1px solid ${({theme}) => theme.textFade};
  font-size: 14px;
  border-radius: ${v.borderRadius};
  outline: none;
`;

export const SButton = styled.button`
  ${btnReset};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${v.smSpacing};
  margin-top: ${v.mdSpacing};
  border-radius: ${v.borderRadius};
  background-color: ${({theme}) => theme.bgSecondary};
  color: ${({theme}) => theme.textSecondary};
  cursor: pointer;
`;

export const SRedirect = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${v.smSpacing};
  font-size: 12px;
`;

export const SRedirectLabel = styled.span`
  color: ${({theme}) => theme.text2};
  margin-right: 5px;
`;

export const SRedirectLink = styled(Link)`
  color: ${({theme}) => theme.primary};
`;
