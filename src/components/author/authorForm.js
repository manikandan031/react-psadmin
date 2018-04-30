"use strict";
var React = require('react');
var TextInput = require('../common/textInput');
var AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <TextInput name="firstName"
                           label="First Name" 
                           onChange={this.props.onChange} 
                           placeholder="First Name" 
                           value={this.props.author.firstName}
                           />
                <br />
                <TextInput name="lastName"
                           label="Last Name" 
                           onChange={this.props.onChange} 
                           placeholder="Last Name" 
                           value={this.props.author.lastName}/>
                <br />
                <input type="submit" value="Save" className="btn btn-primary" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;