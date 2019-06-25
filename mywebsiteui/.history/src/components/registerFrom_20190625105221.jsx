import React from 'react';
import Form from './comon/form';
import Joi from 'joi-browser';
import auth from '../services/authService';
import * as userService from '../services/userService';
import { toast } from 'react-toastify';


class RegisterFrom extends Form {
    state = {
        data: {
            name    : '',
            email   : '',
            password: ''
        },
        errors: {}
    };

    schema = {
        name: Joi.string().min(3).max(30).required().label('First Name'),
        email: Joi.string().email({ minDomainAtoms: 2 }).label('Email Address'),
        password: Joi.string().min(5).label('Password')
    };

    doSubmit = async () => {
        try {
            const response = await userService.register ( this.state.data );
            auth.loginWithJwt( response.headers['x-auth-token'] );
            window.location = '/';
        } catch (error) {
            if (error.response && error.response.status === 400){
                toast.error( error.response.data );
                const errors = { ...this.state.errors };
                errors.email = error.response.data;
                this.setState({ errors })
            }
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Register</h1>
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