import React from 'react';
import { RouteComponentProps } from 'react-router';

import Search from '../molecules/search';

interface WordListProps {
  searchWord: string;
}

const WordListPage: React.FC<RouteComponentProps<WordListProps>> = (props) => {
  const { searchWord } = props.match.params;

  const gotoDetail = () => {
    props.history.push('/detail');
  }

  const goToSearch = () => {
    props.history.push('/search');
  }

  return (
    <div>
      <Search
        onInputClick={goToSearch}
        onSearch={goToSearch}
      />
      WordList Page
      <div>
        <h2>단어 -> {searchWord}</h2>
      </div>
      <div onClick={gotoDetail}>리스트 1</div>
      <div>리스트 2</div>
      <div>리스트 3</div>
    </div>
  );
};

export default WordListPage;
