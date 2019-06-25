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
        if (userPassword.trim() === '') errors.userPassword = 'Email is required';

        return errors;
    }
    
    handleChange = ({currentTarget : input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account });
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors });

        if (errors) return;
        // call to the server
        console.log('submitted');
    }

    render() {
        const { userEmail, userPassword } = this.state.account; 
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <LoginInput
                            value={userEmail}
                            type="email"
                            name="userEmail"
                            onChange={this.handleChange}
                            label="Email Address"
                        />
                        <LoginInput
                            value={userPassword}
                            type="password"
                            name="userPassword"
                            onChange={this.handleChange}
                            label="Password"
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