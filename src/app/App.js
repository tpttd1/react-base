import React from 'react';
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import Home from './index';
import Player from './player/Player';
import './index.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/player/:id" component={Player}></Route>
            </Switch>
        </Router>
    );
}
export default App;