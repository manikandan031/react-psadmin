"use strict";
var React = require('react');
var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Plural Sight Admnistration</h1>
                <p>React, React-router and flux for ultra-responsive apps</p>
            </div>
        );
    }
});

module.exports = Home;