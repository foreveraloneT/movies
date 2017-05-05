import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App/App'
import Home from './components/App/Home'
import About from './components/App/About'

export default () => {
    return (
        <Router history={browserHistory}>
            <Route 
                path='/'
                component={ App } >
                <IndexRoute component={ Home } />
                <Route 
                    path='about' 
                    component={ About } />
            </Route>
        </Router>
    )
}