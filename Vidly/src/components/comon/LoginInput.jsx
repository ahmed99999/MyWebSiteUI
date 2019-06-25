import React from 'react';

const LoginInput = ({ value, type, onChange, label, name, error }) => {
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
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default LoginInput;