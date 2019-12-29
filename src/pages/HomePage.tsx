import React from 'react';
import { RouteComponentProps } from 'react-router';

import Search from '../molecules/search';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  const handleChangePage = () => {
    props.history.push('search');
  }
  return (
    <Search
      onInputClick={handleChangePage}
      onSearch={handleChangePage}
    />
  );
};

export default HomePage;
