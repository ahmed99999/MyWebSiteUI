import React, { Component } from 'react';
import LoginInput from './comon/LoginInput';

class LoginForm extends Component {
    
    state = {
        account : {
            userEmail : '',
            userPassword : '' 
        },
        errors: {}
    };

    validate = () => {
        const errors = {};
        const { userEmail, userPassword } = this.state.account;

        if (userEmail.trim() === '')    errors.userEmail = 'Email is required';
        if (userPassword.trim() === '') errors.userPassword = 'Password is required';

        return ( Object.keys( errors ).length === 0 ) ? null : errors ;
    }

    validateProperty = ({ name, value }) => {
        if (name === 'username' && value.trim() === ''){
            return 'Email is is Required';
        }
        if (name === 'password' && value.trim() === ''){
            return 'Password is is Required';
        }
    }

    handleChange = ({currentTarget : input}) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} });
        
        if (errors) return;
        // call to the server
        console.log('submitted');
    }

    render() {
        const { account } = this.state;
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <LoginInput
                            value={account.userEmail}
                            type="email"
                            name="userEmail"
                            onChange={this.handleChange}
                            label="Email Address"
                            error={errors.userEmail}
                        />
                        <LoginInput
                            value={account.userPassword}
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-5"></div>
            </div>
        );
    }
}
 
export default LoginForm;