import React from 'react';

const LoginInput = ({ value, type, onChange, label }) => {
    return (
        <div className="form-group">
            <label htmlFor="userEmailId">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={value}
                className="form-control"
                id={value}
                aria-describedby="emailHelp"
            />
        </div>
    );
}
 
export default LoginInput;