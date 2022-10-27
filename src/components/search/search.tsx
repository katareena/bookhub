import React from 'react'
import { SWrap, SSearch, SSearchIcon, SContent } from './search.styles';
import { AiOutlineSearch } from 'react-icons/ai';

function Search(): JSX.Element {
  const searchClickHandler = () => {
    console.log('search')
    // search functionality
  };

  return (
    <SWrap>
      <SSearch onClick={searchClickHandler}>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          placeholder='Search'
        />
      </SSearch>
      <SContent></SContent>
    </SWrap>
  )
}

export default Search;
