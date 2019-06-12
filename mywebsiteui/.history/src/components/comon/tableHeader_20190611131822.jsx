import React, { Component } from 'react';

class TableHeader extends Component {

    render() { 
        const { columns, handelSort } = this.props;
        return ( 
            <thead>
                <tr key='-1'>
                    {columns.map( column =>
                        <th key={column.key} onClick={()=>handelSort(column.key)}>{column.lable}</th>
                    )}
                </tr>
            </thead>
         );
    }
}
 
export default TableHeader;