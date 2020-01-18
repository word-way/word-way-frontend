import React from 'react';
import { RouteComponentProps } from 'react-router';

import Search from '../molecules/search';

const SearchPage: React.FC<RouteComponentProps> = (props) => {

  const handleSearch = (word: string) => {
    props.history.push(`/search/${word}`);
  }

  return (
    <Search 
      onSearch={handleSearch}
      autoFocus={true}
    />
  );
};

export default SearchPage;
