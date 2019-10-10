import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Search from '../pages/Search/Search';
import WordList from '../pages/WordList/WordList';
import WordDetail from '../pages/WordDetail/WordList';
import Fiiltering from '../pages/Fiiltering/WordList';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/filter" component={Fiiltering} />
            <Route path="/list" component={WordList} />
            <Route path="/detail" component={WordDetail} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;