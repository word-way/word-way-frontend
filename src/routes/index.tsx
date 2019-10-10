import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Search from '../pages/Search/Search';
import WordList from '../pages/WordList/WordList';
import Home from '../pages/Home/Home';
import WordDetail from '../pages/WordDetail/WordDetail';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" component={Search} />
            <Route path="/list" component={WordList} />
            <Route path="/detail" component={WordDetail} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;