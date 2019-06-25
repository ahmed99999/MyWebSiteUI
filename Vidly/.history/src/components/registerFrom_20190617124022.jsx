import React from 'react';
import Form from './comon/form';
import Joi from 'joi-browser';

class RegisterFrom extends Form {
    state = {
        data: {
            firstName: '',
            lastName: '',
            userEmail: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        firstName: Joi.string().min(3).max(30).required().label('First Name'),
        lastName: Joi.string().alphanum().min(3).max(30).required().label('Last Name'),
        userEmail: Joi.string().email({ minDomainAtoms: 2 }).label('Email Address'),
        password: Joi.string().min(5).label('Password')
    };

    doSubmit = () => {
        // sever call
        console.log('registered');
    };

    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('firstName', 'First Name', 'text')}
                        {this.renderInput('lastName', 'Last Name', 'text')}
                        {this.renderInput('userEmail', 'Email Address', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Register')}
                    </form>
                </div>
                <div className="col-5"></div>
            </div>
        );
    }
}

export default RegisterFrom;