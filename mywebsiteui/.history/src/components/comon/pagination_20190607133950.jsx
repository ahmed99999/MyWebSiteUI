import React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => {

    const {pageSize, itemsCount, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil( itemsCount / pageSize ) ;
    const pages = [...Array(pagesCount+1).keys()].slice(1);

    if ( pagesCount === 1 ) {
        return null;
    }
    const classNameData = "page-item";

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map( pageNumber => (
                    <li key={pageNumber} className={(currentPage === pageNumber) ? classNameData + ' active' : classNameData}>
                        <a 
                            className="page-link"
                            onClick={()=>onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.PropTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
 
export default Pagination;