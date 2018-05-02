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
    statics: {
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm("Leave without saving?")){
                transition.abort();
            }
        }
    },
    getInitialState: function(){
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function(){
        var a = AuthorApi.getAuthorById(this.props.params.id);
        if(a != null){
            this.setState({
                author: a
            });
        }
    },
    setAuthorState: function(e){
        var field = e.target.name;
        var value = e.target.value;
        this.state.author[field] = value;
        this.setState({
            author: this.state.author,
            dirty: true
        });
    },
    validateAuthor: function(){
        var authorIsValid = true;
        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = "First Name must be atleast 3 characters";
            authorIsValid = false;
        }
        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = "Last Name must be atleast 3 characters";
            authorIsValid = false;
        }
        this.setState({
            errors: this.state.errors
        });
        return authorIsValid;
    },
    saveAuthor: function(e){
        e.preventDefault();
        if(!this.validateAuthor()){
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        this.setState({
            dirty: false
        });
        toastr.success("Author Saved!!!");
        this.transitionTo('authors');
    },
    render: function(){
        return (
            <div>
                <h4>Add Author</h4>
                <AuthorForm author={this.state.author} 
                            onChange={this.setAuthorState} 
                            onSave={this.saveAuthor} 
                            errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;