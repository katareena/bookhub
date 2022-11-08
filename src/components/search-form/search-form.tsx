import React, { useEffect, useRef, FormEvent } from 'react';
import { SearchContainer, SearchFormBox, SearchInner, SearchInput, SearchButton } from './search-form.styles';
import { FaSearch } from 'react-icons/fa';

function SearchForm(): JSX.Element {
  const searchText = useRef<HTMLInputElement | null>(null);
  useEffect(() => searchText.current?.focus(), []);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log('Searching...');
  };

  return (
    <SearchContainer>
      <SearchFormBox onSubmit={handleSubmit}>
        <SearchInner>
          <SearchInput type='text' placeholder='The Lost World...' ref={searchText} />
          <SearchButton type='submit'>
            <FaSearch size={32} />
          </SearchButton>
        </SearchInner>
      </SearchFormBox>
    </SearchContainer>
  )
}

export default SearchForm;
