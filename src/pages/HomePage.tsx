import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import Button from '../components/button';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  const [word, setWord] = useState<string>();

  const searchWord = () => {
    props.history.push(`/search?words=${word}`);
  }

  const changeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value)
  }

  return (
    <>
      <form>
        <input onChange={changeSearchInput} defaultValue={word}/>
        <Button onClick={searchWord}>검색</Button>
      </form>
    </>
  );
};

export default HomePage;
