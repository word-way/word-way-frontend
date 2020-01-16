import React, { useState } from 'react';
import Button from '../../components/button'
import Input from '../../components/input'

interface SearchProps {
  initWord?: string;
  onInputClick?: () => void;
  onSearch: (word: string) => void;
}

const Search = (props: SearchProps): React.ReactElement<SearchProps> => {
  const { initWord, onSearch } = props;
  const [ word, setWord ] = useState(initWord || '');

  let element:HTMLElement;

  const handleChangeSearchContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  }

  return (
    <>
      <form>
        <Input
          key='ipnput'
          onChange={handleChangeSearchContent}
          value={word}
        />
        <Button 
          type="submit"
          onClick={(e: any) => { 
            onSearch('word');
          }}
        >
          검색
        </Button>
      </form>
    </>
  );
};

export default Search;
