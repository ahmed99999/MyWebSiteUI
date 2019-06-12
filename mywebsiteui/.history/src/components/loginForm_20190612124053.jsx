import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-8">
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="userEmailId">Email address</label>
                            <input type="email" className="form-control" id="userEmailId" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userPasswordId">Password</label>
                            <input type="password" className="form-control" id="userPasswordId" placeholder="Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="userRememberMeId"/>
                            <label className="form-check-label" htmlFor="userRememberMeId">remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        );
    }
}
 
export default LoginForm;