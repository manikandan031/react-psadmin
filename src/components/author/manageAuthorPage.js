"use strict";
var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    getInitialState: function(){
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },
    setAuthorState: function(e){
        var field = e.target.name;
        var value = e.target.value;
        this.state.author[field] = value;
        this.setState({
            author: this.state.author
        });
    },
    render: function(){
        return (
            <div>
                <h4>Add Author</h4>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;