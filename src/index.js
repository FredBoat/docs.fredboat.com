import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, Redirect} from 'react-router-dom'
import { BrowserRouter } from 'react-g-analytics';
import './css/index.css';

const AppRoute = ({ match }) => {
    if(match.params.page === "index") {
        return <Redirect to="/"/>
    }

    const page = match.params.page === undefined ? "index" : match.params.page;

    return <App page={page}/>
};

ReactDOM.render(
    <BrowserRouter id="UA-25845175-7">
        <div>
            <Route exact path="/" component={AppRoute}/>
            <Route path="/:page" component={AppRoute}/>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);
