import React from 'react';
import { RouteComponentProps } from 'react-router';

import { ThemeProvider } from 'styled-components';
import { theme } from '../static/theme';
import Button from '../components/button';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  function searchWord() {
    const url = 'search';
    props.history.push(url);
  }
  return (
    <ThemeProvider theme={theme}>
      <form>
        <input />
        <Button onClick={searchWord}>검색</Button>
      </form>
    </ThemeProvider>
  );
};

export default HomePage;
