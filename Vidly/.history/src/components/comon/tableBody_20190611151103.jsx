import React from 'react';

const TableBody = ({ elements, renderElement})=> {
    render() {
        return ( <tbody>
            {elements.map( (element) => (
                renderElement(element)
            ))}
        </tbody> );
    }
}
 
export default TableBody;