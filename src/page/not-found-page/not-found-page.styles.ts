import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v } from '../../styles/variables';

export const NotFoundBox = styled.div`
  margin: 25px 40px;
`;

export const NotFoundTitle = styled.h2`
  font-size: 2.5rem;
`;

export const NotFoundLink = styled(Link)`
  font-size: 1.3rem;
  color: ${({theme}) => theme.primary};
  display: flex;
  width: max-content;
  padding: calc(${v.smSpacing} - 2px) 0;

  &:hover,
  &:focus {
    color: ${({theme}) => theme.hover};
    outline: none;
  }
`;
