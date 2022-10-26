import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v } from '../../styles/variables';

export const SLink = styled(Link)`
  color: ${({theme}) => theme.primary};
  display: flex;
  padding: calc(${v.smSpacing} - 2px) 0;

  &:hover,
  &:focus {
    color: ${({theme}) => theme.hover};
    outline: none;
  }
`;
