import React, { Component } from 'react';
import LoginInput from './comon/LoginInput';

class LoginForm extends Component {
    
    state = {
        account : {
            userEmail : '',
            userPassword : '' 
        }
    };

    handleChange = ({currentTarget : input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account });
    }

    handleSubmit = e => {
        e.preventDefault();
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