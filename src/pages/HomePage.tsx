import React from 'react';
import { RouteComponentProps } from 'react-router';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  function searchWord() {
    const url = 'search';
    props.history.push(url);
  }
  return (
    <>
      <form>
        <input />
        <button onClick={searchWord}>검색</button>
      </form>
    </>
  );
};

export default HomePage;
