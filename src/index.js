import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import './css/index.css';

const AppRoute = ({ match }) => {
    if(match.params.page === "index") {
        return <Redirect to="/"/>
    }

    const page = match.params.page === undefined ? "index" : match.params.page;

    return <App page={page}/>
};

/**
 * @return {null}
 */
const Analytics = ({location}) => {
    if (typeof window.ga === 'function') {
        window.ga('send', 'pageview', location.pathname + location.search);
    }
    console.log(location.pathname + location.search);
    return null;
};

ReactDOM.render(
    <BrowserRouter id="UA-25845175-7">
        <div>
            <Route exact path="/" component={AppRoute}/>
            <Route path="/:page" component={AppRoute}/>
            <Route path="/" render={Analytics}/>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);
