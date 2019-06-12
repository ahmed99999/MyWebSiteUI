import React, { Component } from 'react';

const TableHeader = ({ columns, handelSort })=> {
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
 
export default TableHeader;