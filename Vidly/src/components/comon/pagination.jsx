import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pageSize, itemsCount, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = [...Array(pagesCount + 1).keys()].slice(1);
    const classNameData = "page-item";

    if (pagesCount === 1) {
        return null;
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(pageNumber => (
                    <li key={pageNumber} className={(currentPage === pageNumber) ? classNameData + ' active' : classNameData}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;