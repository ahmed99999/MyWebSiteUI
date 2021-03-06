import React, { Component } from 'react';
import { Joi } from 'joi-browser';

class Form extends Component {
    
    state = {
        data    : {},
        errors  : {}
    }

    validate = () => {
        const options = { abortEarly: false };
        const errors = {};
        const { error } = Joi.validate( this.state.account, this.schema, options );
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

        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account, errors });
    };

}
 
export default Form;