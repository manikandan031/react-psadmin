$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/author/authorPage');

(function(win){
    "use strict";
    var App = React.createClass({
        render: function(){
            var Child;
            switch(this.props.route){
                case 'authors': 
                    Child = Authors;
                    break;
                case 'about': 
                    Child = About;
                    break;
                default:
                    Child = Home;
            }
            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

function render(){
    console.log('Hash: ' + win.location.hash);
    var url = win.location.hash.substr(1);
    React.render(<App route={url} />, document.getElementById('app'));
}

win.addEventListener('hashchange', render);
render();

})(window);
