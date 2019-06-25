import React, { Component } from 'react';
import { Joi } from 'joi-browser';

const Form = () => {
    const state = {
        data    : {},
        errors  : {}
    }

    const validate = () => {
        const options = { abortEarly: false };
        const errors = {};
        const { error } = Joi.validate( this.state.data, this.schema, options );
        if ( !error ) return null;
        
        error.details.forEach( detail => {
            let key = detail.path[0];
            errors[key] = detail.message;
        });
        return errors;
    };

    const validateProperty = ({ name, value }) => {
        const obj = { [name] : value };
        const schema = {[name]: this.schema[name]};
        const { error } = Joi.validate( obj, schema );
        return ( !error ) ? null : error.details[0].message;
    };

    
    const handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors : errors || {} });
        
        if (errors) return;
        this.doSubmit();
    };

    const handleChange = ({currentTarget : input}) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    
    this.validate = validate;
    this.validateProperty = validateProperty;
    this.handleSubmit = handleSubmit;
    this.handleChange = handleChange;
}
 
// export default ;

// class Form extends Component {
    
//     state = {
//         data    : {},
//         errors  : {}
//     }

//     validate = () => {
//         const options = { abortEarly: false };
//         const errors = {};
//         const { error } = Joi.validate( this.state.data, this.schema, options );
//         if ( !error ) return null;
        
//         error.details.forEach( detail => {
//             let key = detail.path[0];
//             errors[key] = detail.message;
//         });
//         return errors;
//     };

//     validateProperty = ({ name, value }) => {
//         const obj = { [name] : value };
//         const schema = {[name]: this.schema[name]};
//         const { error } = Joi.validate( obj, schema );
//         return ( !error ) ? null : error.details[0].message;
//     };

    
//     handleSubmit = e => {
//         e.preventDefault();

//         const errors = this.validate();
//         this.setState({ errors : errors || {} });
        
//         if (errors) return;
//         this.doSubmit();
//     };

//     handleChange = ({currentTarget : input}) => {
//         const errors = { ...this.state.errors };
//         const errorMessage = this.validateProperty(input);
//         if (errorMessage) errors[input.name] = errorMessage;
//         else delete errors[input.name];

//         const data = {...this.state.data}
//         data[input.name] = input.value;
//         this.setState({ data, errors });
//     };

// }
 
export default Form;