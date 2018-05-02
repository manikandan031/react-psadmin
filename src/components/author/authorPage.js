"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorsPage = React.createClass({
    getInitialState: function(){
        return {
            authors: []
        };
    },
    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({
                authors: AuthorApi.getAllAuthors()
            });
        }
    },
    render: function(){
        return (
            <div>
                <h1>Authors</h1>
                <Link className="btn btn-default" to="addAuthor">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div> 
        );
    }
});

module.exports = AuthorsPage;