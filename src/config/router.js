import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import Form from "../components/Form";
import AdDetail from "../components/AdDetail";
import CategoryList from "../components/CategoryList";
import Category from "../components/Category";

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/addetail" component={AdDetail} />
                <Route exact path="/categorylist" component={CategoryList} />
                <Route exact path="/category" component={Category} />
            </Router>
        )
    }
}

export default AppRouter;