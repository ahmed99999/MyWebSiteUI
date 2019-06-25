import React, { Component } from 'react';
import LoginInput from './comon/LoginInput';
import Joi from 'joi-browser';
import Form from './comon/form';

class LoginForm extends Form {
    
    state = {
        data : {
            userEmail : '',
            userPassword : '' 
        },
        errors: {}
    };        

    schema = {
        userEmail    : Joi.string().required().label('User Email'),
        userPassword : Joi.string().required().label('Password')
    };

    doSubmit = () => {
          // call to the server
          console.log('submitted');
    }

    render() {
        const { data } = this.state;
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <LoginInput
                            value={data.userEmail}
                            type="email"
                            name="userEmail"
                            onChange={this.handleChange}
                            label="Email Address"
                            error={errors.userEmail}
                        />
                        <LoginInput
                            value={data.userPassword}
                            type="password"
                            name="userPassword"
                            onChange={this.handleChange}
                            label="Password"
                            error={errors.userPassword}
                        />
                        
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="userRememberMeId"/>
                            <label className="form-check-label" htmlFor="userRememberMeId">Remember Me</label>
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-primary"
                            disabled = {this.validate()}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-5"></div>
            </div>
        );
    }
}
 
export default LoginForm;