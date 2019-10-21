import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage, WordDetailPage, WordListPage } from '../pages';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/detail/:id' component={WordDetailPage} />
            <Route path='/detail' component={WordDetailPage} />
            <Route path='/search/:word' component={WordListPage} />
            <Route path='/search' component={WordListPage} />
            <Redirect path='*' to='/' />
        </Switch>
    </BrowserRouter>
);

export default Root;
