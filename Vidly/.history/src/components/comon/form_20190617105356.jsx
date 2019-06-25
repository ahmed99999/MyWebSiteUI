import React, { Component } from 'react';
import Joi from 'joi-browser';
import LoginInput from './LoginInput';

class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return (!error) ? null : error.details[0].message;
    };

    validate = () => {
        const options = { abortEarly: false };
        const errors = {};
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        error.details.forEach((detail) => {
            const key = detail.path[0];
            errors[key] = detail.message;
        });
        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data }
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderSelect = (genres, id, label) => {
        // const error = this.state.errors.name;
        return (
            <div className="form-group">
                <label htmlFor="Genre">{label}</label>
                <select className="form-control" name="Genre">
                    {genres.map(genre => (
                        <option
                            key={genre._id}
                            defaultValue={(genre._id === id) ? genre.name : ''}
                            value={genre.name}
                        >
                            {genre.name}
                        </option>
                    ))}
                </select>
                {/* {error && <div className="alert alert-danger">{error}</div>} */}
            </div>
        );
    }
    renderButton = (label) => {
        return (
            <button
                type="submit"
                className="btn btn-primary"
                disabled={this.validate()}
            >
                {label}
            </button>
        );
    }

    renderInput = (name, label, type) => {
        const { data, errors } = this.state;
        return (
            <LoginInput
                value={data[name]}
                type={type}
                name={name}
                onChange={this.handleChange}
                label={label}
                error={errors[name]}
            />
        );

    }
}

export default Form;