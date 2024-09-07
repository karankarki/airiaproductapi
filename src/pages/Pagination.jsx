import React from 'react';
import "./pagination.css"
export default function Pagination({ pageNumbers, currentPage, paginate }) {
    return (

        <div className="page_main">
        
<div className="pagination">

<div className="numbers_">
{pageNumbers.map(number => (
    <button
        key={number}
        onClick={() => paginate(number)}
        className={number === currentPage ? 'active' : ''}
    >
        {number}
    </button>
))}
</div>

</div>
        </div>
        
    );
}
