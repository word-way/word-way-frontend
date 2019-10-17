import React from 'react';
import { RouteComponentProps } from 'react-router';
interface WordDetailProps {
  id: string;
}
const WordDetailPage: React.FC<RouteComponentProps<WordDetailProps>> = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      WordDetail Page {id}
    </div>
  );
}

export default WordDetailPage;
