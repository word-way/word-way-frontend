import React from 'react';
import { RouteComponentProps } from 'react-router';

interface WordListProps {
  searchWord: string;
}

const WordListPage: React.FC<RouteComponentProps<WordListProps>> = (props) => {
  function gotoDetail() {
    const url = '/detail';
    props.history.push(url);
  }
  const { searchWord } = props.match.params;
  return (
    <div>
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
