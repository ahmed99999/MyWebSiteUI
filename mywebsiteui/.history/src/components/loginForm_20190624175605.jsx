import React from 'react';
import Joi from 'joi-browser';
import Form from './comon/form';
import { login } from '../services/authService';
import { toast } from 'react-toastify';

class LoginForm extends Form {

    state = {
        data: {
            userEmail: '',
            userPassword: ''
        },
        errors: {}
    };

    schema = {
        userEmail: Joi.string().email({ minDomainAtoms: 2 }).required().label('User Email'),
        userPassword: Joi.string().required().label('Password')
    };

    doSubmit = async () => {
        // call to the server
        const { data } =this.state;
        try {
            await login( data.userEmail, data.userPassword );
            window.location = '/';
        } catch (error) {
            if( error.response && error.response.status === 400){
                const errors = { ...this.state.errors };
                errors.userEmail = error.response.data;
                toast.error( error.response.data );
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('userEmail', 'Email Address', 'email')}
                        {this.renderInput('userPassword', 'User Password', 'password')}

                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="userRememberMeId" />
                            <label className="form-check-label" htmlFor="userRememberMeId">Remember Me</label>
                        </div>
                        {this.renderButton('Submit')}
                    </form>
                </div>
                <div className="col-5"></div>
            </div>
        );
    }
}

export default LoginForm;
