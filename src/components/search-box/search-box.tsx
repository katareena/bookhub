import React from 'react'
import { SearchContainer, SearchBoxTitle, SearchBoxText } from './search-box.style';
import SearchForm from '../search-form/search-form';

function SearchBox(): JSX.Element {
  return (
    <SearchContainer>
      <SearchBoxTitle>find your book of choice</SearchBoxTitle>
      <SearchBoxText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</SearchBoxText>
      <SearchForm />
    </SearchContainer>
  )
}

export default SearchBox;
