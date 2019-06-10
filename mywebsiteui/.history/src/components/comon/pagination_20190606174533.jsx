import React from 'react';

const Pagination = props => {

    const {pageSize, itemsCount} = props;
    const pagesCount = Math.ceil( itemsCount / pageSize ) ;
    const pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);        
    }

    if ( pagesCount === 1 ) {
        return null;
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map( pageNumber => (
                    <li key={pageNumber} className="page-item"><a className="page-link">{pageNumber}</a></li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Pagination;