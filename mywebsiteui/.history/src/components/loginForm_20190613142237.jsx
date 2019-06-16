import React, { Component } from 'react';
import LoginInput from './comon/LoginInput';
import Joi from 'joi-browser';
import Form from './comon/form';

class LoginForm extends Component {
    
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

    validate = () => {
        const options = { abortEarly: false };
        const errors = {};
        const { error } = Joi.validate( this.state.data, this.schema, options );
        if ( !error ) return null;
        
        error.details.forEach( detail => {
            let key = detail.path[0];
            errors[key] = detail.message;
        });
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name] : value };
        const schema = {[name]: this.schema[name]};
        const { error } = Joi.validate( obj, schema );
        return ( !error ) ? null : error.details[0].message;
    };

    
    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} });
        
        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({currentTarget : input}) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState({ data, errors });
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