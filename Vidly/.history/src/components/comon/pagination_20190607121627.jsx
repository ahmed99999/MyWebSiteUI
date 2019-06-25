import React from 'react';

const Pagination = props => {

    const {pageSize, itemsCount, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil( itemsCount / pageSize ) ;
    const pages = [...Array(pagesCount).keys()];
    // for (let index = 1; index <= pagesCount; index++) {
    //     pages.push(index);        
    // }

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
}
 
export default Pagination;