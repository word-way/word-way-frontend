import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ArrayParam, useQueryParams } from 'use-query-params';

interface WordListProps {
  searchWord: string;
}

const WordListPage: React.FC<RouteComponentProps<WordListProps>> = (props) => {
  const [query, _] = useQueryParams({
    words: ArrayParam,
  });

  const gotoDetail = () => {
    const url = '/detail';
    props.history.push(url);
  };

  return (
    <div>
      WordList Page
      <div>
        <h2>단어 -> {query.words}</h2>
      </div>
      <div onClick={gotoDetail}>리스트 1</div>
      <div>리스트 2</div>
      <div>리스트 3</div>
    </div>
  );
};

export default WordListPage;
