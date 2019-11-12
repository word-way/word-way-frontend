import React from 'react';
import { RouteComponentProps } from 'react-router';

import Button from '../components/button';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  function searchWord() {
    const url = 'search';
    props.history.push(url);
  }
  return (
    <>
      <form>
        <input />
        <Button onClick={searchWord}>검색</Button>
      </form>
    </>
  );
};

export default HomePage;
