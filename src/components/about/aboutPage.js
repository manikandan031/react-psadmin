"use strict";
var React = require('react');
var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if(confirm("are you sure you want a read a page this boring?")){
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            //transition.about() is not working. Need to figure out
        }
    },
    render: function(){
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technoligies
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;