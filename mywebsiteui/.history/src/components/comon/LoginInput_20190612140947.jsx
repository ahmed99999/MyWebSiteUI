import React from 'react';

const LoginInput = ({ value, type, onChange, label, name }) => {
    return (
        <div className="form-group">
            <label htmlFor="userEmailId">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className="form-control"
                id={name}
                placeholder={name}
            />
        </div>
    );
}
 
export default LoginInput;