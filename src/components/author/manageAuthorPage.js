"use strict";
var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
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
    saveAuthor: function(e){
        e.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success("Author Saved!!!");
        this.transitionTo('authors');
    },
    render: function(){
        return (
            <div>
                <h4>Add Author</h4>
                <AuthorForm author={this.state.author} 
                            onChange={this.setAuthorState} 
                            onSave={this.saveAuthor}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;