import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        const { elements, renderElement} = this.props;
        return ( <tbody>
            {elements.map( (element) => (
                renderElement(element)
            ))}
        </tbody> );
    }
}
 
export default TableBody;