import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './css/index.css';

const AppRoute = ({ match }) => {
    if(match.params.page === "index") {
        return <Redirect to="/"/>
    }

    const page = match.params.page === undefined ? "index" : match.params.page;

    return <App page={page}/>
};

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={AppRoute}/>
            <Route path="/:page" component={AppRoute}/>
        </div>
    </Router>,
  document.getElementById('root')
);
