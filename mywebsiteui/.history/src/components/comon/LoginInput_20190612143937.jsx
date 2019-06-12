import React from 'react';

const LoginInput = ({ value, type, onChange, label, name }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="form-control"
                id={name}
            />
        </div>
    );
}
 
export default LoginInput;