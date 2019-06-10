import React from 'react';

const Pagination = props => {

    const {pageSize, itemsCount} = props;
    const pagesCount = itemsCount / pageSize;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link">1</a></li>
                <li className="page-item"><a className="page-link">2</a></li>
                <li className="page-item"><a className="page-link">3</a></li>
            </ul>
        </nav>
    );
}
 
export default Pagination;