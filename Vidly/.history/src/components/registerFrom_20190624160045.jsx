import React from 'react';
import Form from './comon/form';
import Joi from 'joi-browser';
import Http from '../services/httpService';

class RegisterFrom extends Form {
    state = {
        data: {
            name: '',
            email: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        name: Joi.string().min(3).max(30).required().label('First Name'),
        email: Joi.string().email({ minDomainAtoms: 2 }).label('Email Address'),
        password: Joi.string().min(5).label('Password')
    };

    doSubmit = e => {
        
        console.log( e );
        
    };

    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('name', 'First Name', 'text')}
                        {this.renderInput('email', 'Email Address', 'email')}
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