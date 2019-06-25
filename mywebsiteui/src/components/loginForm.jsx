import React from 'react';
import Joi from 'joi-browser';
import Form from './comon/form';
import auth from '../services/authService';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

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
            await auth.login( data.userEmail, data.userPassword );
            const { state } = this.props.location;
            window.location = ( state ) ? state.from.pathname : '/';
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
        if ( auth.getCurrentUser() ) return <Redirect to="/" /> 
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
