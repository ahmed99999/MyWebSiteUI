import React, { Component } from 'react';

class TableHeader extends Component {
    
    render() { 
        return ( 
            <thead>
                <tr key = '-1'>
                    <th onClick={()=>handelSort('title')}>Title</th>
                    <th onClick={()=>handelSort('genre')}>Genre</th>
                    <th onClick={()=>handelSort('numberInStock')}>Stock</th>
                    <th onClick={()=>handelSort('dailyRentalRate')}>Rate</th>
                    <th />
                    <th />
                    <th />
                    <th />
                </tr>
            </thead>
         );
    }
}
 
export default TableHeader;