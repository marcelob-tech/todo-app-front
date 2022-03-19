import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";
import Todos from "../todo/todo";
import About from "../about/about";


const routes = (props) => {
    return (
        <Router history={hashHistory}>
            <Route path='/todos' component={Todos} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Router>
    );
};

export default routes;



