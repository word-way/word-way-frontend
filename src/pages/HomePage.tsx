import React from 'react';
import { RouteComponentProps } from 'react-router';

import Button from '../components/button';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  const handleChangePage = () => {
    props.history.push('search');
  }
  return (
    <form>
      <input onClick={handleChangePage}/>
      <Button onClick={handleChangePage}>검색</Button>
    </form>
  );
};

export default HomePage;
