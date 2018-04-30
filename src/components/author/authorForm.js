"use strict";
var React = require('react');
var AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={this.props.author.firstName} 
                    onChange={this.props.onChange} />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={this.props.author.lastName} 
                    onChange={this.props.onChange}/>
                <br />
                <input type="submit" value="Save" className="btn btn-primary" />
            </form>
        );
    }
});

module.exports = AuthorForm;