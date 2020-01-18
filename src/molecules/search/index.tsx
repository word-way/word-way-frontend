import React, { useState } from 'react';
import Button from '../../components/button'
import Input from '../../components/input'

interface SearchProps {
  initWord?: string;
  onInputClick?: () => void;
  onSearch: (word: string) => void;
  autoFocus?: boolean;
}

const Search = (props: SearchProps): React.ReactElement<SearchProps> => {
  const { initWord, onSearch, onInputClick, autoFocus } = props;
  const [ word, setWord ] = useState(initWord || '');

  const handleChangeSearchContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  }

  const handleClickSubmitButton = () => {
    onSearch(word);
  }

  return (
    <>
      <form>
        <Input
          key='ipnput'
          onClick={onInputClick}
          onChange={handleChangeSearchContent}
          value={word}
          autoFocus={autoFocus || false}
        />
        <Button 
          type="submit"
          onClick={handleClickSubmitButton}
        >
          검색
        </Button>
      </form>
    </>
  );
};

export default Search;
