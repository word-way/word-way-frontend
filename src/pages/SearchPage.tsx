import React from 'react';
import { RouteComponentProps } from 'react-router';

import Search from '../molecules/search';

const HomePage: React.FC<RouteComponentProps> = (props) => {

  const handleSearch = (word: string) => {
    props.history.push(`/search/${word}`);
  }

  return (
    <>
      <Search key="search_component" onSearch={handleSearch} />
    </>
  );
};

export default HomePage;
