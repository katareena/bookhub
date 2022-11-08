import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SearchFormBox = styled.form`
  width: 100%;
  max-width: 680px;
`;

export const SearchInner = styled.div`
  padding: 1.4rem 2.8rem;
  border-radius: 3.8rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const SearchInput = styled.input`
  border: none;
  font-family: inherit;
  font-size: 2rem;
  padding: 0.6rem;
  outline: 0;
`;

export const SearchButton = styled.button`
  &:hover,
  &:focus {
    color: ${({theme}) => theme.hover};
    outline: none;
    transition: all 0.2s ease;
  }
`;
