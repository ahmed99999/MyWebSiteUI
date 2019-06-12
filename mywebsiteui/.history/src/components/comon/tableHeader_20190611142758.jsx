import React, { Component } from 'react';

class TableHeader extends Component {

    render() { 
        const { columns, handelSort } = this.props;
        return ( 
            <thead>
                <tr>
                    {columns.map( column => (
                        <th className='clickbale' key={column.key} onClick={()=>handelSort(column.key)}>{column.lable}</th>
                    ))}
                </tr>
            </thead>
         );
    }
}
 
export default TableHeader;