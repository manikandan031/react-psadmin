"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" path="authors" handler={require('./components/author/authorPage')} />
        <Route name="manageAuthor" path="author" handler={require('./components/author/manageAuthorPage')} />
        <Route name="about" path="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={require('./components/notFoundPage')} />
        <Redirect from="awthurs" to="authors"/>
    </Route>
);

module.exports = routes;